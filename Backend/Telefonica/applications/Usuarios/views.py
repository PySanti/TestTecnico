from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import status
from .models import Usuarios
from django.core import serializers

CUPOS_SHOWABLE_FIELDS = ["saldo", "numero_movil", "datos", "plataforma", "max_datos", "fecha_corte"]



class ObtenerDatos(APIView):
    # Esta view permitira consumir/filtrar los cupos del usuario
    # En caso de recibir el parametro "all" se retornaran todos los cupos
    # En caso de recibir el parametro "prepago" o "postpago" se retornaran aquellos cupos prepago o postpago respectivamente
    # En caso de recibir un numero que empiece por 0424 o 0414, se retornaran los cupos cuyos numeros_moviles empiecen por 0424 o 0414
    # En caso de recibir un numero real, se retornaran los cupos que tengan ese numero en saldo o en datos
    # En todos los casos que no son ninguno de los anteriores se retornara error por BAD_REQUEST. Igualmente en el caso en el que el nombre de usuario del parametro no exista
    def get(self, request, nombre : str, parametro : str):
        if (Usuarios.objects.filter(nombre=nombre)):
            user = Usuarios.objects.get(nombre=nombre)
            if parametro.lower() == "all":
                return JsonResponse({"cupos_list": list(user.cupos.all().values(*CUPOS_SHOWABLE_FIELDS))}, status=status.HTTP_200_OK)
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
                            # como el numero_movil es unique, sabemos que en este punto el queryset solo tendra 1 elemento
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


