from django.shortcuts import render, HttpResponse, redirect
from l_r_app.models import User

# Create your views here.
def index(request):
    name = request.session['LoggedUser']
    name_id = request.session['LoggedUserName']
    name1 = User.objects.get(id=name)
    return HttpResponse(f"Hi {name1.last_name}")