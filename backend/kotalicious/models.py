from django.db import models
from django.contrib.auth.models import User


# Table for products made
class Product(models.Model):
    product_name = models.CharField(max_length=30)
    product_price = models.IntegerField()
    product_ingredients = models.CharField(max_length=250)
    product_img = models.CharField(max_length=30)

    def __str__(self):
        return self.product_name


# Table for how orders are received
class Order(models.Model):
    order_user = models.ForeignKey(User, on_delete=models.CASCADE)
    order_name = models.CharField(max_length=30)
    order_price = models.IntegerField()
    order_date = models.DateTimeField()
    order_image = models.ImageField(upload_to='food_images/')

    def __str__(self):
        return self.order_user


# Users Profile Pictures
class Image(models.Model):
    image_user = models.ForeignKey(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='profiles', null=True, blank=True)

    def __str__(self):
        return self.image_user
