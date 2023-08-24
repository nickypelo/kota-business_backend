from django.shortcuts import render
from rest_framework import viewsets
from .serializers import OrderSerializer, ProductSerializer, CustomerSerializer
from .models import Order, Product, Customer


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


