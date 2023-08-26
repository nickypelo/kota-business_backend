from django.db import models


# Table that registers a user and helps validate user
class Customer(models.Model):
    customer_name = models.CharField(max_length=30)
    customer_surname = models.CharField(max_length=30)
    customer_email = models.EmailField()
    customer_username = models.CharField(max_length=30)
    customer_pwd = models.CharField(max_length=10)

    def __str__(self):
        return self.customer_name + ' ' + self.customer_surname


# table that captures the orders made by user
class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    order_name = models.CharField(max_length=20)
    order_price = models.IntegerField()
    order_ingredients = models.CharField(max_length=50)
    # order_date = models.DateField()

    def __str__(self):
        return self.order_name

    def added_ingredient(self):
        return self.order_ingredients + ' sauces'


# table that contains the products the owner will sell
class Product(models.Model):
    product_name = models.CharField(max_length=30)
    product_price = models.IntegerField()
    product_ingredients = models.CharField(max_length=500)
    product_image = models.CharField(max_length=40)

