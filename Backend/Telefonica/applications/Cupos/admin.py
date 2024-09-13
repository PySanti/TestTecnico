from django.contrib import admin
from .models import Cupos

# Registramos la tabla en el administrador de django para debug
admin.site.register(Cupos)