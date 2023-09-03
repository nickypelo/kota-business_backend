from rest_framework import generics, permissions
from rest_framework.response import Response

from kotalicious.models import Product, Order, CustomUser, Image
from .serializer import ProductSerializer, OrderSerializer, CustomUserSerializer, ForUser, ImageSerializer


class CustomUserAPIView(generics.ListCreateAPIView):
    # permission_classes = (permissions.IsAdminUser,)
    permission_classes = (permissions.AllowAny,)
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class UserProfileView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def retrieve(self, request, *args, **kwargs):
        serializer = ForUser(request.user)
        return Response(serializer.data)


# Product model all data view
class ProductAPIView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


# Product data individual view
class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class OrderAPIView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class ImageAPIView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
