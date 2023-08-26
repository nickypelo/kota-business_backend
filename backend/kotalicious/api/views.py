from rest_framework import viewsets
from kotalicious.api.serializers import OrderSerializer, ProductSerializer, CustomerSerializer
from kotalicious.models import Order, Product, Customer
from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework_simplejwt.serializers import  TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


# Order serializer to be viewed on django api interface
class OrderView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()


# Product serializer
class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


# Customer serializer
class CustomerView(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# for api tokens
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/token',
        'token/refresh',
    ]

    return Response(routes)
