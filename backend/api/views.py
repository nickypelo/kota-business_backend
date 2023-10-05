# from rest_framework import generics
# from rest_framework import permissions
#
#
# from ..kotalicious.models import Product, Order, Image
# from .serializer import (ProductSerializer, OrderSerializer,
#                          ImageSerializer)
#
#
# # Products viewed and edited by owner
# class ProductAPIView(generics.ListCreateAPIView):
#     permission_classes = (permissions.IsAdminUser,)
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
#
#
# # Orders made by users
# class OrderAPIView(generics.ListCreateAPIView):
#     # permission_classes = (permissions.IsAuthenticated,)
#     queryset = Order.objects.all()
#     serializer_class = OrderSerializer
#
#
# # Orders made by users to be edited by users
# class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
#     # permission_classes = (permissions.IsAuthenticated,)
#     queryset = Order.objects.all()
#     serializer_class = OrderSerializer
#
#
# # Users create and send images
# class ImageAPIView(generics.ListCreateAPIView):
#     permission_classes = (permissions.AllowAny,)
#     queryset = Image.objects.all()
#     serializer_class = ImageSerializer
#
#
# # Users create and send images
# class ImageDetailView(generics.RetrieveUpdateAPIView):
#     permission_classes = (permissions.AllowAny,)
#     queryset = models.Image.objects.all()
#     serializer_class = ImageSerializer
#
#
