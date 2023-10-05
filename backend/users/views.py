import json

from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.http import JsonResponse


# register new users
def register(request):
    if request.method == 'POST':
        form_data = json.loads(request.body)
        # extract the necessary registration details
        username = form_data['username']
        first_name = form_data['first_name']
        last_name = form_data['last_name']
        email = form_data['email']
        password = form_data['password']

        user = User.objects.create_user(username, email, password, first_name=first_name, last_name=last_name)
        user.save()
        print('This nigga is trying')

        return JsonResponse({'success': 'User has been registered.'})
    else:
        return JsonResponse({'error': 'User could not be registered.'})


# login users and return token
def login(request):
    if request.method == 'POST':
        form_data = json.loads(request.body)
        username = form_data['username']
        password = form_data['password']

        user = authenticate(username=username, password=password)
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            token.delete()
            token = Token.objects.create(user=user)
            return JsonResponse({'success': token.key})
        else:
            return JsonResponse({'error': 'User does not exist.'})

    else:
        return JsonResponse({'error': 'Can only send post requests here'})

