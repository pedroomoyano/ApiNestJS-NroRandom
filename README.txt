Enunciado del Examen:
Objetivo: Desarrollar un servidor API utilizando NestJS que responda con un número aleatorio entre 1 y 100 cuando se haga una solicitud a una ruta determinada.

Requisitos:

Implementar una ruta HTTP POST que al recibir una solicitud genere un número aleatorio entre 1 y 100.

La respuesta debe ser un JSON con la siguiente estructura: { "value": <número> }.

La API debe implementar un middleware para registrar el timestamp (marca de tiempo) de cada solicitud.

Crear un frontend mínimo en React que tenga un botón para realizar una solicitud a esta ruta, y muestre el número aleatorio recibido en pantalla.

Extras:
Si el candidato tiene conocimientos de Docker, se puede agregar un Dockerfile para contenerizar la aplicación.

Se valorará el uso de buenas prácticas en la estructura del código y manejo de errores.

Opcional:
Si decides no hacer la ruleta y solo mostrar el número aleatorio, de ser posible, también implementa una animación en el frontend que lo presente de manera visualmente atractiva.