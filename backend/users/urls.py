from django.urls import path
from .views import register, login

urlpatterns = [
    path('registration/engage/', register, name='registration'),
    path('login/engage/', login, name='login'),
]
