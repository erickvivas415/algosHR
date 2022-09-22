from django.urls import path     
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('login', views.login),
    path('success', views.success),
    path('logout', views.logout),
    path('postMessage', views.postMessage),
    path('postComment', views.postComment),
    path('deleteComment', views.deleteComment),
    path('deleteMessage', views.deleteMessage),
]