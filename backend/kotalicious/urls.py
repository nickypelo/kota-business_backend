from django.urls import path
from .views import welcome, ProductAPIView, OrderAPIView, OrderDetailView, ImageAPIView

urlpatterns = [
    path('', welcome, name='homepage'),
    path('product/', ProductAPIView.as_view(), name='products'),
    path('order/<int:pk>/', OrderDetailView.as_view(), name='specific_order'),
    path('order/', OrderAPIView.as_view(), name='orders'),
    path('image', ImageAPIView.as_view(), name='profile_picture')
]
