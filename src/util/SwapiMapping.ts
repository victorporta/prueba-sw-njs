const attributeMapping: { [key: string]: string } = {
    "birth_year": "año_nacimiento",
    "eye_color": "color_ojos",
    "films": "películas",
    "gender": "género",
    "hair_color": "color_pelo",
    "height": "altura",
    "homeworld": "planeta_origen",
    "mass": "masa",
    "name": "nombre",
    "skin_color": "color_piel",
    "created": "fecha_creación",
    "edited": "fecha_edición",
    "species": "especies",
    "starships": "naves_espaciales",
    "url": "url_personaje",
    "vehicles": "vehículos",
    "characters": "personajes",
    "director": "director",
    "episode_id": "episodio_id",
    "opening_crawl": "texto_apertura",
    "planets": "planetas",
    "producer": "productor",
    "release_date": "fecha_lanzamiento",
    "title": "título",
    "MGLT": "MGLT",
    "cargo_capacity": "capacidad_carga",
    "consumables": "consumibles",
    "cost_in_credits": "costo_en_créditos",
    "crew": "tripulación",
    "hyperdrive_rating": "calificación_hiperimpulsor",
    "length": "longitud",
    "manufacturer": "fabricante",
    "max_atmosphering_speed": "velocidad_max_atmósfera",
    "model": "modelo",
    "passengers": "pasajeros",
    "starship_class": "clase_nave_espacial",
    "vehicle_class": "clase_vehículo",
    "average_height": "altura_promedio",
    "average_lifespan": "esperanza_vida_promedio",
    "classification": "clasificación",
    "designation": "designación",
    "eye_colors": "colores_ojos",
    "hair_colors": "colores_cabello",
    "language": "idioma",
    "people": "personajes",
    "skin_colors": "colores_piel",
    "climate": "clima",
    "diameter": "diámetro",
    "gravity": "gravedad",
    "orbital_period": "período_orbital",
    "population": "población",
    "residents": "residentes",
    "rotation_period": "período_rotación",
    "surface_water": "agua_superficial",
    "terrain": "terreno"
  };
  export function transformToSpanish(apiDataArray: any[]): any[] {
    return apiDataArray.map(apiData => {
      return transformRowToSpanish(apiData);
    });
  }
  export function transformRowToSpanish(apiData: any): any {
    const transformedData: any = {};
    for (const key in apiData) {
      const translatedKey = attributeMapping[key] || key;
      transformedData[translatedKey] = apiData[key];
    }
    return transformedData;
  }