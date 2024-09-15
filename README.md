
# Test Tecnico

Proyecto desarrollado para superar el test tecnico, parte de mi candidatura al puesto de desarrollador web/app en Telefonica.

#   Uso de scripts para rellenar DB

Una vez descargado el proyecto e instaladas las dependencias, debera moverse a la carpeta del backend, aquella carpeta que contiene los archivos 'script.py' y 'script.sql' usando el comando ...

```
 cd [ubicacion]
```

Una vez hecho eso, lo primero sera crear el usuario del proyecto, darle todos los permisos y crear la DB usando el script de SQL.

Se conectara desde su terminal a MySql usando el comando ...

```
mysql -u root -p
```

Y una vez dentro correr el comando ...

```
source script.sql
```

Ademas, activara el entorno virtual del proyecto Django. 
```
cd ..
source dependencies/bin/activate
cd Telefonica
```

Correra las migraciones del proyecto, esto para usar la ORM de Django para crear las tablas necesarias en MySql ...

```
python3 manage.py migrate
```

Despues, usara el comando ...

```
python3 manage.py shell
```

Para activar la terminal interactiva de Django y tener acceso directo a la ORM. Posteriormente, ya tendra libertad de correr el script para llenar las tablas con datos aleatorios ...

```
from script import fill_users, fill_cupos
fill_cupos()
fill_users()
```

Vease que la ejecucion de los comandos debe ser exactamente en ese orden.



