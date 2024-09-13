from django.db import models
from .manager import CuposManager
# Create your models here.
class Cupos(models.Model):
    PLATAFORMA_CHOICES = [
        ("PRE", "Prepago"),
        ("POST", "Postpago")
    ]
    numero_movil = models.CharField(max_length=12)
    saldo = models.DecimalField(decimal_places=2, max_digits=10)
    datos = models.DecimalField(decimal_places=2, max_digits=10)
    plataforma = models.CharField(max_length=4, choices=PLATAFORMA_CHOICES, default="PRE")
    objects = CuposManager()