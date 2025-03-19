# Usuarioweb

Este proyecto es una aplicación web Full Stack que permite la gestión de usuarios mediante un sistema CRUD (Crear, Leer, Actualizar y Eliminar). Se desarrolló utilizando LoopBack 4 como backend y Angular como frontend .

Tecnologías utilizadas:
Backend: Desarrollado con LoopBack 4, un framework basado en Node.js que permite la creación de APIs REST.
Base de datos: Se gestiona mediante LoopBack DataSources, conectando con bases  de datos, en este caso se uso MYSQL
Frontend: Desarrollado en Angular, un framework para crear aplicaciones web dinámicas y responsivas.

Funcionamiento del Proyecto:
1. Backend:
  - La API REST en LoopBack 4 debe estar activa para procesar solicitudes del frontend (angular).
  - Gestiona la conexión con MySQL y ejecuta operaciones CRUD.
2. Frontend:
   - Angular consume la API REST de loopback  mediante HttpClient, permitiendo la interacción con los datos en tiempo real.
   - Presenta una interfaz intuitiva para gestionar usuarios de manera eficiente.


## PARA EJECUTAR LA APLICACION WEB:
 Para ejecutar la aplicación correctamente, sigue estos pasos:

1. Inicia el backend: Asegúrate de que LoopBack y la base de datos estén en funcionamiento.

2. Ejecuta el frontend: Usa el siguiente comando en la terminal:
" ng serve -o "
Esto abrirá automáticamente la aplicación en el navegador.

3. Accede a la aplicación en: http://localhost:4200/
Cualquier cambio en el código se reflejará automáticamente en la aplicación.
