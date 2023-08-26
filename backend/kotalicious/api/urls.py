from kotalicious import views
from django.urls import path, include
from rest_framework import routers
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

# API for Database
router = routers.DefaultRouter()
router.register(r'customers', views.CustomerView, 'customer')
router.register(r'choices', views.OrderView, 'choose')
router.register(r'products', views.ProductView, 'product')

urlpatterns = [
    path('', include(router.urls)),
    path('tokens', views.getRoutes),
    path('tokens/token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('tokens/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
