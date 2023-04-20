from rest_framework import viewsets
from .serializer import ProovedorSerializer
from .models import proovedor
# Create your views here.

class ProovedorView(viewsets.ModelViewSet):
    serializer_class = ProovedorSerializer
    queryset = proovedor.objects.all()
