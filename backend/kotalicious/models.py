from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings


# Custom User model
class CustomUser(AbstractUser):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField()


# Product model
class Product(models.Model):
    product_name = models.CharField(max_length=30)
    product_price = models.IntegerField()
    product_ingredients = models.CharField(max_length=250)
    product_img = models.CharField(max_length=30)

    def __str__(self):
        return self.product_name


# Orders model
class Order(models.Model):
    order_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    order_name = models.CharField(max_length=30)
    order_price = models.IntegerField()
    order_date = models.DateTimeField()
    order_image = models.ImageField(upload_to='food_images/')

    def __str__(self):
        return self.order_user


class Image(models.Model):
    image_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='profiles/', null=True, blank=True)

