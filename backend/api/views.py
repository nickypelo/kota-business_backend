from rest_framework import generics, permissions

from kotalicious.models import Product
from .serializer import ProductSerializer


# Product model all data view
class ProductAPIView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


# Product data individual view
class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


