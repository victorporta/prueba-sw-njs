export const SwaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentación de la API con Swagger',
    },
    components: {
      schemas: {
        People: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Nombre del personaje',
            },
            birth_year: {
              type: 'string',
              description: 'Año de nacimiento del personaje',
            },
            eye_color: {
              type: 'string',
              description: 'Color de ojos del personaje',
            },
            gender: {
              type: 'string',
              description: 'Género del personaje',
            },
            hair_color: {
              type: 'string',
              description: 'Color de cabello del personaje',
            },
            height: {
              type: 'string',
              description: 'Altura del personaje en cm',
            },
            mass: {
              type: 'string',
              description: 'Masa del personaje en kg',
            },
            homeworld: {
              type: 'string',
              description: 'Planeta natal del personaje',
            },
          },
        },
      },
    },
    paths: {
      '/swapi/people': {
        get: {
          tags: ['SWAPI'],
          summary: 'Obtiene el listado de personajes',
          description: 'Retorna una lista de personajes desde SWAPI',
          responses: {
            200: {
              description: 'Listado de personajes obtenido correctamente',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/People',
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/swapi/planets': {
        get: {
          tags: ['SWAPI'],
          summary: 'Obtiene el listado de planetas',
          description: 'Retorna una lista de planetas desde SWAPI',
          responses: {
            200: {
              description: 'Listado de planetas obtenido correctamente',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        name: {
                          type: 'string',
                          description: 'Nombre del planeta',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/swapi/species': {
        get: {
          tags: ['SWAPI'],
          summary: 'Obtiene el listado de Especies',
          description: 'Retorna una lista de Especies desde SWAPI',
          responses: {
            200: {
              description: 'Listado de Especies obtenido correctamente',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        name: {
                          type: 'string',
                          description: 'Nombre de la Especie',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/swapi/starships': {
        get: {
          tags: ['SWAPI'],
          summary: 'Obtiene el listado de naves espaciales',
          description: 'Retorna una lista de naves espaciales desde SWAPI',
          responses: {
            200: {
              description: 'Listado de naves espaciales obtenido correctamente',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        name: {
                          type: 'string',
                          description: 'Nombre de la naves espacial',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/swapi/vehicles': {
        get: {
          tags: ['SWAPI'],
          summary: 'Obtiene el listado de vehículos',
          description: 'Retorna una lista de vehículos desde SWAPI',
          responses: {
            200: {
              description: 'Listado de vehículos obtenido correctamente',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        name: {
                          type: 'string',
                          description: 'Nombre del vehículo',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/database/people': {
        get: {
          tags: ['API Local'],
          summary: 'Obtiene el listado de registros de People',
          description: 'Obtiene los registros almacenados en la tabla People',
          responses: {
            200: {
              description: 'Listado de registros obtenido correctamente',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/People',
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/database/people/save': {
        post: {
          tags: ['API Local'],
          summary: 'Guarda un nuevo registro en la tabla People',
          description: 'Guarda un nuevo registro con los detalles de la persona en la base de datos',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/People',
                },
              },
            },
          },
          responses: {
            201: {
              description: 'Registro guardado exitosamente',
            },
            400: {
              description: 'Error en la solicitud',
            },
          },
        },
      },
    },
    consumes : ["application/json"],
    servers: [
        {
            url: 'http://localhost:4000/api',
            description: 'Servidor local',
        }
    ],
  };
  
