from rest_framework import serializers
from .models import empleados, proovedor

class empleadosSerializer(serializers.ModelSerializer):
    class Meta:
        model = empleados
        model2 = proovedor
        #fields = ('id', 'nombre', 'identidad')
        fields = '__all__'