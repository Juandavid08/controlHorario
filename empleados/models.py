from django.db import models

# Create your models here.

class proovedor(models.Model):
    nombre = models.CharField(max_length=40)
    identidad = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nombre
    
class empleados(models.Model):
    nombre = models.CharField(max_length=40)
    entrada = models.DateTimeField()
    exit_time = models.DateTimeField()
    
    def __str__(self):
        return self.nombre
