from django.urls import path, include

from .views import ProductAPIView, ProductDetailAPIView, OrderAPIView, OrderDetailAPIView, CustomUserAPIView, UserProfileView, ImageAPIView

urlpatterns = [
    path('images/', ImageAPIView.as_view()),
    path('product/', ProductAPIView.as_view()),
    path('product/<int:pk>/', ProductDetailAPIView.as_view()),
    path('order/', OrderAPIView.as_view()),
    path('order/<int:pk>', OrderDetailAPIView.as_view()),
    path('users/', CustomUserAPIView.as_view()),
    path('user-profile/', UserProfileView.as_view()),

]
