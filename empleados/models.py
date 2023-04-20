from django.db import models

# Create your models here.
    
class empleados(models.Model):
    nombre = models.CharField(max_length=40)
    entrada = models.DateTimeField()
    salida = models.DateTimeField()
    
    def __str__(self):
        return self.nombre
