from django.db import models

# Create your models here.
import re, bcrypt
from datetime import datetime, date

import datetime

# Create your models here.

class UserManager(models.Manager):
    def registration_validator(self, postData):
        errors = {}
        if len(postData["first_name"]) < 2:
            errors["first_name"] = "First name must be at least 2 characters"
        if len(postData["last_name"]) < 2:
            errors["last_name"] = "Last name must be at least 2 characters"
        if postData["user_pwd"] != postData["confirm_pwd"]:
            errors["password"] = "Password doesn't match"
        if len(postData["user_pwd"]) < 8:
            errors["8password"] = "Password must be at least 8 characters"
        Email_Regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not Email_Regex.match(postData["user_email"]):
            errors["invalidEmail"] = "Invalid Email Address"
        email_check = self.filter(email=postData["user_email"])
        if email_check:
            errors["notunique"] = "Email already in use"
        if datetime.datetime.strptime(postData["user_birthday"], '%Y-%m-%d') > datetime.datetime.now():
            errors['show_date'] = 'This person has not born yet'
            #print(datetime.strptime(postData["user_birthday"], '%Y-%m-%d'))
        today = datetime.date.today()
        a = datetime.datetime.strptime(postData["user_birthday"], '%Y-%m-%d').date()
        b = today.year - a.year
        if b < 13:
            errors['show_date'] = 'User must be at least 13 years old'
        return errors

    def login_validator(self, postData):
        errors = {}
        checkUser = User.objects.filter(email = postData["user_email"])
        if len(checkUser) < 1:
            errors['NoUser'] = "Invalid Username and Password combination"
        elif not bcrypt.checkpw(postData["user_pwd"].encode(), checkUser[0].password.encode()):
            errors['"pwdNoMatch'] = "Invalid Username and Password combination"
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    birthday = models.DateField(auto_now_add=False, auto_now=False, blank=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    objects = UserManager()

class Messages(models.Model):
    user = models.ForeignKey(User, related_name="user_messages", on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class Comments(models.Model):
    user = models.ForeignKey(User, related_name="user_comments", on_delete=models.CASCADE)
    messages = models.ForeignKey(Messages, related_name="post_comments", on_delete=models.CASCADE)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
