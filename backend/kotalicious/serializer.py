from rest_framework.serializers import ModelSerializer
from .models import Product, Order, Image


# Product model serializer
class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


# Order model serializer
class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


# Image model serializer
class ImageSerializer(ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'
