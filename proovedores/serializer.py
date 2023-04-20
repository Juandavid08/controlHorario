from rest_framework import serializers
from .models import proovedor

class ProovedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = proovedor
        fields = '__all__'