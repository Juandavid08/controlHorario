from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from empleados import views

# API
router = routers.DefaultRouter()
router.register(r'empleados', views.EmpleadoView, 'empleados')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="API empleados"))
]