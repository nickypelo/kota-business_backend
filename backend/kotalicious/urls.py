from django.urls import path
from . import views

urlpatterns = [
    # welcome/
    path('', views.index, name='index'),
    # welcome/login
    path('login/', views.login, name='login')
]
