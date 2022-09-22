from typing import ContextManager
from django.shortcuts import redirect, render, HttpResponse
from .models import *
from django.contrib import messages
import bcrypt


# Create your views here.
def index(request):
    return render(request, 'index.html')

def register(request):
    if request.method == "POST":
        errors = User.objects.registration_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return render(request, "index.html")
        pwd = bcrypt.hashpw(request.POST['user_pwd'].encode(), bcrypt.gensalt()).decode()
        User.objects.create(
            first_name = request.POST['first_name'],
            last_name = request.POST['last_name'],
            birthday = request.POST['user_birthday'],
            email = request.POST['user_email'],
            password = pwd
        )
        request.session['LoggedUser'] = User.objects.last().id
        return redirect('/success')

def success(request):
    if 'LoggedUser' not in request.session:
        return redirect('/')
    user = User.objects.get(id=request.session['LoggedUser'])
    context = {
        'user': user
    }
    #return redirect('multi_app') 
    render(request, 'success.html', context)

def login(request):
    if request.method == "POST":
        errors = User.objects.login_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return render(request, "index.html")
        request.session['LoggedUser'] = User.objects.get(email = request.POST['user_email']).id
        request.session['LoggedUserName'] = User.objects.get(email = request.POST['user_email']).first_name
        return redirect('/multi_app')

def logout(request):
    request.session.clear()
    return redirect('/')

def dashboard(request):
    if 'LoggedUser' not in request.session:
        return redirect('/')
    context = {
        'user_on': User.objects.get(id=request.session['LoggedUser'])
    }
    return render(request, 'dashboard.html', context)