from django.db import models

# Create your models here.
class proovedor(models.Model):
    nombre = models.CharField(max_length=40)
    identidad = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nombre
    