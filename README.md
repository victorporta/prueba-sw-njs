# Proyecto Serverless con Node.js y TypeScript

Este proyecto es una implementación serverless utilizando Node.js y TypeScript. El mismo se conecta a una base de datos MySQL y también consume datos de la API pública de Star Wars (SWAPI). A continuación, se detallan los pasos de instalación, configuración y uso de la API.

## Requisitos previos
- [Node.js](https://nodejs.org/) v14 o superior
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/) para gestionar la base de datos
- [Prisma](https://www.prisma.io/) para la interacción con la base de datos

## Instalación

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio
   ```
2. Instala las dependencias del proyecto:
```
   npm install
```
3. Crea una base de datos MySQL llamada softek:
```
  CREATE DATABASE softek;
```
4. Ejecuta el archivo query.sql para crear la tabla People en la base de datos, que se utilizará para almacenar los registros:

## Configuración de Prisma
1. Asegúrate de configurar las variables de entorno para la conexión a tu base de datos MySQL en el archivo .env:
   ```
   DATABASE_URL="mysql://user:password@localhost:3306/softek"
   ```
2. Genera los modelos de Prisma:
   ```
   npx prisma generate
   ```
3. Ejecuta las migraciones para crear las tablas necesarias en la base de datos:
   ```
   npx prisma migrate dev --name init
   ```
## Entorno de desarrollo local
Para ejecutar el proyecto en tu entorno local, utiliza el siguiente comando:
```
npm run offline
```
Esto iniciará el servidor en modo offline utilizando serverless-offline. El dominio por defecto para acceder a la API será:
```
http://localhost:4000/api
```
## Documentación de la API
### Consumo de SWAPI
El proyecto incluye 5 endpoints que consumen la API de SWAPI, para obtener información sobre el universo de Star Wars.

- /swapi/people | GET\
Obtiene el listado de personajes desde SWAPI:
https://swapi.py4e.com/api/people/

- /swapi/planets | GET \
Obtiene el listado de planetas desde SWAPI:
https://swapi.py4e.com/api/planets/

- /swapi/species | GET \
Obtiene el listado de especies desde SWAPI:
https://swapi.py4e.com/api/species/

- /swapi/starships | GET\
Obtiene el listado de naves espaciales desde SWAPI:
https://swapi.py4e.com/api/starships/

- /swapi/vehicles | GET\
Obtiene el listado de vehículos desde SWAPI:
https://swapi.py4e.com/api/vehicles/

### API Local (Base de Datos)
Estos endpoints están conectados a la base de datos MySQL local:

- /database/people | GET\
Obtiene el listado de registros almacenados en la tabla People.

- /database/people/save | POST\
Guarda un nuevo registro en la tabla People. El cuerpo de la solicitud debe ser un JSON con el siguiente formato:
```json
{
    "birth_year": "2012-01-23",
    "eye_color": "Red",
    "gender": "M",
    "hair_color": "Blue",
    "height": "100",
    "homeworld": "Test",
    "mass": "Mass 4",
    "name": "Prueba registro 2"
}
```
## Pruebas unitarias
 
Este proyecto incluye pruebas unitarias para garantizar el correcto funcionamiento de los endpoints. Las pruebas están implementadas utilizando Jest.

- **Endpoints de SWAPI** : Se han creado pruebas para los 5 endpoints que consumen la API de SWAPI.
- **Base de datos**: Pruebas unitarias para verificar la obtención de un listado de registros y la creación de nuevos registros en la tabla People.
### Ejecutar las pruebas
Para ejecutar las pruebas unitarias, simplemente corre el siguiente comando:
```
npm test
```
Este comando ejecutará todas las pruebas definidas en el proyecto.


