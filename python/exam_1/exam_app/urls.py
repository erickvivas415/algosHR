from django.urls import path
from . import views

urlpatterns = [
    path('', views.quoteCentral),
    path('addQuote', views.addQuote),
    path('<int:val>/likeQuote', views.likeQuote),
    path('user/<int:val>', views.userDashboard),
    path('deleteQuote/<int:val>', views.deleteQuote),
]