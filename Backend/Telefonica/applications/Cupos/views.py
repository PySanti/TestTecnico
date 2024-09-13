from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class Prueba(APIView):
    def get(self, request):
        data = {'mensaje': '¡Hola, APIView!'}
        return Response(data, status=status.HTTP_200_OK)

