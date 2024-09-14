from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import status
from .models import Usuarios
from django.core import serializers

CUPOS_SHOWABLE_FIELDS = ["saldo", "numero_movil", "datos", "plataforma", "max_datos"]

class ObtenerDatos(APIView):
    def get(self, request, nombre, parametro):
        if (Usuarios.objects.filter(nombre=nombre)):
            user = Usuarios.objects.get(nombre=nombre)
            if parametro.lower() in ["prepago", "postpago"]:
                cupos_plataforma = user.cupos.filter(plataforma="pre" if parametro.lower()=="prepago" else "post").values(*CUPOS_SHOWABLE_FIELDS)
                return JsonResponse({"cupos_by_plataforma": list(cupos_plataforma)}, status=status.HTTP_200_OK)
            try:
                float(parametro)
            except ValueError:
                return JsonResponse({"error" : "unexpected_parameter"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                if parametro[0:4] in ["0424", "0414"]:
                    if (len(parametro) == 11):
                        cupos_by_movil = user.cupos.filter(numero_movil=parametro).values(*CUPOS_SHOWABLE_FIELDS)
                        if (cupos_by_movil):
                            return JsonResponse({"cupos_by_movil" : cupos_by_movil[0]}, status=status.HTTP_200_OK)
                        else:
                            return JsonResponse({"error" : "no_cupos_by_movil"}, status=status.HTTP_200_OK)
                    else:
                        return JsonResponse({"error" : "unvalid_movil"}, status=status.HTTP_200_OK)
                else:
                    parametro = float(parametro)
                    cupos_by_datos = user.cupos.filter(datos=parametro).values(*CUPOS_SHOWABLE_FIELDS)
                    if cupos_by_datos:
                        return JsonResponse({"cupos_by_datos" : list(cupos_by_datos)}, status=status.HTTP_200_OK)
                    else:
                        cupos_by_saldo = user.cupos.filter(saldo=parametro).values(*CUPOS_SHOWABLE_FIELDS)
                        if cupos_by_saldo:
                            return JsonResponse({"cupos_by_saldo" : list(cupos_by_saldo)}, status=status.HTTP_200_OK)
                        else:
                            return JsonResponse({"error" : "no_cupo_found"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return JsonResponse({"error":"not_existing_user"}, status=status.HTTP_400_BAD_REQUEST)


