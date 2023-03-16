# Instrucciones para ejecutar el proyecto
Este proyecto utiliza Node.js y PostgreSQL junto con Docker y Docker Compose para su ejecución. A continuación se detallan los pasos necesarios para poner en marcha el proyecto después de descargarlo desde el repositorio.

Requisitos
Antes de continuar, asegúrese de tener instalado Docker y Docker Compose en su sistema.



Paso 1: Ejecutar los contenedores de Docker
Ejecute el siguiente comando para construir e iniciar los contenedores de Docker:

```bash
npm run start-env
```
Este comando creará y ejecutará la imagen de Docker usando Docker Compose.

Paso 2: Acceder a la aplicación
Después de que los contenedores de Docker estén en ejecución, la aplicación estará disponible en http://localhost:5000.