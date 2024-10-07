import {SwapiService  } from '../../src/services/SwapiService';
describe('Pruebas de SWAPI, 5 ENDPOINTS ', () => {
    it('Debería obtener datos People', async () => {
        const response = await SwapiService.getPeople(false);
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
        expect(response.data && typeof response.data === 'object').toBe(true)
      });
      it('Debería obtener datos Planets', async () => {
        const response = await SwapiService.getPlanets(false);
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
        expect(response.data && typeof response.data === 'object').toBe(true)
      });
      it('Debería obtener datos Vehicles', async () => {
        const response = await SwapiService.getVehicles(false);
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
        expect(response.data && typeof response.data === 'object').toBe(true)
      });
      it('Debería obtener datos Species', async () => {
        const response = await SwapiService.getSpecies(false);
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
        expect(response.data && typeof response.data === 'object').toBe(true)
      });
      it('Debería obtener datos Starships', async () => {
        const response = await SwapiService.getStarships(false);
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
        expect(response.data && typeof response.data === 'object').toBe(true)
      });
})