from django.shortcuts import redirect, render, HttpResponse
from l_r_app.models import User, Quotes
from django.contrib import messages

# Create your views here.
def quoteCentral(request):
    #name = request.session['LoggedUser']
    #name1 = User.objects.get(id=name)
    context = {
        'name': User.objects.get(id=request.session['LoggedUser']),
        'quotes_db': Quotes.objects.all()
    }
    return render(request,'quotescentral.html', context)

def addQuote(request):
    if request.method == "POST":
        errors = Quotes.objects.quote_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/quotes')
        else:
            CurrentUser = User.objects.get(id=request.session['LoggedUser'])
            CurrentQuote = Quotes.objects.create(
                author = request.POST['authorName'],
                quote = request.POST['quoteText'],
                posted_by = CurrentUser,
            )
            CurrentUser.liked_quotes.add(CurrentQuote)
    return redirect('/quotes')

def likeQuote(request, val):
    CurrentUser = User.objects.get(id=request.session['LoggedUser'])
    CurrentUser.liked_quotes.add(Quotes.objects.get(id=val))
    return redirect('/quotes')

def userDashboard(request, val):
    context = {
        'name': User.objects.get(id=val),
        'quotes_db': Quotes.objects.filter(posted_by=val)
    }
    return render(request,'userdashboard.html', context)

def deleteQuote(request, val):
    CurrentQuote = Quotes.objects.get(id=val)
    CurrentQuote.delete()
    return redirect('/quotes')