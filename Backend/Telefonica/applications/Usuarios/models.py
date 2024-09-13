from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .manager import UsuariosManager
from applications.Cupos.models import Cupos


#   Modelo creado para llevar los usuarios de la app
#
class Usuarios(AbstractBaseUser, PermissionsMixin):
    """
        Modelo creado para almacenamiento de todo tipo de usuarios
    """

    #* Campos Basicos (Django)
    username        = models.CharField(max_length=40, unique=True, default=" ")
    email           = models.EmailField(unique=True, default=None)
    is_staff        = models.BooleanField(default=False)
    REQUIRED_FIELDS = ["nombre", 'email']
    USERNAME_FIELD  = 'username'

    #* Campos Requeridos
    nombre          = models.CharField(max_length=40)
    numero_movil    = models.CharField(max_length=12, default=None, null=True)
    cupos           = models.ManyToManyField(Cupos)

    #* MANAGER
    objects         = UsuariosManager()

    def __str__(self):
        return f"{self.nombre}, {self.id}"
    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'