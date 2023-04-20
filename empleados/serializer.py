from rest_framework import serializers
from .models import empleados

class empleadosSerializer(serializers.ModelSerializer):
    class Meta:
        model = empleados
        #fields = ('id', 'nombre', 'identidad')
        fields = '__all__'