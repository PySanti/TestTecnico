from applications.Usuarios.models import Usuarios
from applications.Cupos.models import Cupos
from datetime import datetime
from random import choice, randint

nombres = ["Fernando", 'Santiago', "Pedro", "Nelson", "Adrian", "Ramiro"]
apellidos = ["De Andrade", "Garcia", "Fernandez", "Gomez", "Gonzales"]

def generate_random_mobile():
    a="0424" if randint(1,2) == 1 else "0414"
    b=str(randint(1111111,9999999))
    return a+b

def fill_cupos():
    for i in range(7):
        datos = randint(0,500)
        Cupos.objects.create(numero_movil=generate_random_mobile(), saldo=randint(0, 100), datos=datos, max_datos=datos*10, fecha_corte=datetime(2024, 10, randint(1,31) ),plataforma="PRE" if randint(1,2)==1 else "POST")

def fill_users():
    for i in range(20):
        nombre = choice(nombres)
        username=f"{nombre}{randint(100,3000)}"
        p = Usuarios.objects.create_user(username=username, password="123456789", email=f"{username}@gmail.com", nombre=f"{nombre} {choice(apellidos)}", numero_movil=generate_random_mobile())
        for a in range(1,6):
            if randint(1,2)==1:
                p.cupos.add(Cupos.objects.get(id=a))
                p.save()


