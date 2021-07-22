import {filterData} from '../src/data.js';
import data from '../src/data/pokemon/pokemon';
import test from '../src/data/pokemon/Pruebas';


  describe('filterData', () => {
    it('Deberia ser Nombre de pokemon', () => {
      expect(data.pokemon[0].name).toBe("bulbasaur");
    });

    it("Deberia ser una Funcion", () => {
      expect(typeof filterData).toBe("function");
    });

    it('Deberia retornar tipo de Pokemon"', () => {
      expect(filterData(data,"type","dragon")).toMatchObject(test.tt);
    });

    it('debería retornar true para "79927398713"', () => {
      expect(filterData(data)).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(filterData(data)).toBe(false);
    });
  });


