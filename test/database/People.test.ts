import { PrismaClient } from '@prisma/client';
import { PeopleModel } from "../../src/models/PeopleModel";
import { People } from "../../src/interfaces/SwapiInterface";

describe('Obtener datos de la Base de datos', () => {

    it('Se obtiene informacion de la tabla People', async () => {
      const result = await PeopleModel.getData({
        skip: 0,
        take : 10
    });  
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });
  
    it('se inserta un registro en la tabla People', async () => {
      const newRecord:People = { birth_year: 'Test',eye_color: 'red',gender: 'male',hair_color: 'blue',height: '120',homeworld:'hpme test ',mass:'2323',name:'test'};
      let insertData= await PeopleModel.saveData({
        data: newRecord
      });
      expect(insertData).toBeTruthy();
    expect(insertData).toBeDefined();
    expect(insertData?.birth_year).toBe('Test');
    });

  });