from django.db import models
from django.contrib.auth.models import AbstractUser


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

