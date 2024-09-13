from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import status

class ObtenerDatos(APIView):
    def get(self, request, nombre, parametro):

        return JsonResponse({"hola":"Hola"}, status=status.HTTP_200_OK)


