import swaggerUi,{SwaggerOptions} from 'swagger-ui-express';
import { Application } from 'express';
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'Documentación de la SWAPI con Swagger',
  },
  consumes : ["application/json"],
  servers: [
    {
      url: 'http://localhost:4000/api',
      description: 'Servidor local',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts']
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Application): void {
  app.use('/swagger', (req, res, next) => {
    console.log(req.originalUrl)
    if (req.originalUrl === '/swagger') return res.redirect('swagger/');
    next();
  }, swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));
}