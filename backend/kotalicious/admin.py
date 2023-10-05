from django.contrib import admin
from .models import Product, Order, Image

# Register Product model
admin.site.register(Product)

# Register Owner model
admin.site.register(Order)

# Register Image model
admin.site.register(Image)
