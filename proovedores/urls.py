from django.urls import path, include
from rest_framework import routers
from proovedores import views

# API
router = routers.DefaultRouter()
router.register(r'proovedores', views.ProovedorView, 'proovedores')

urlpatterns = [
    path("api/v1/", include(router.urls))
]