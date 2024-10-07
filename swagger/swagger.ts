import { Application } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import {SwaggerDefinition} from './SwaggerDefinition'

const options = {
  swaggerDefinition:SwaggerDefinition,
  apis: ['./src/routes/*.ts']
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Application): void {
  app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  // Sirve el archivo HTML
  app.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, './swagger/html/swagger-docs.html'));
  });
}