from rest_framework import serializers
from kotalicious.models import Order, Customer, Product


# format Order data into json
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'order_name', 'order_price', 'order_ingredients')


# format Order data into json
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'customer_name', 'customer_surname', 'customer_email', 'customer_pwd')


# format Product data into a json
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'product_name', 'product_price', 'product_ingredients', 'product_image')
