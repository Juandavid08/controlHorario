from rest_framework import viewsets
from .serializer import empleadosSerializer
from .models import empleados

# Create your views here.
class EmpleadoView(viewsets.ModelViewSet):
    serializer_class = empleadosSerializer
    queryset = empleados.objects.all()

   
