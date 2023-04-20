from django.urls import path, include
from rest_framework import routers
from empleados import views

# API
router = routers.DefaultRouter()
router.register(r'empleados', views.EmpleadoView, 'empleados')


urlpatterns = [
    path("api/v1/", include(router.urls))
]