from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .manager import UsuariosManager

# Create your models here.
class Usuarios(AbstractBaseUser, PermissionsMixin):
    """
        Modelo creado para almacenamiento de todo tipo de usuarios
    """
    #* BASE ATTRS
    username        = models.CharField(max_length=40, unique=True)
    email           = models.EmailField(unique=True, default=None)
    is_staff        = models.BooleanField(default=False)
    REQUIRED_FIELDS = ['email']
    USERNAME_FIELD  = 'username'
    #* NEW ATTRS
    numero_movil = models.CharField(max_length=12, default=None, null=True)

    #* MANAGER
    objects         = UsuariosManager()

    def __str__(self):
        return f"{self.username}, {self.id}"
    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'