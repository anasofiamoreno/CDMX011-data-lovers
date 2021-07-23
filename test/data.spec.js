import { filterData, sortData } from '../src/data.js';
import data from '../src/data/pokemon/pokemon';
import test from '../src/data/pokemon/Pruebas';
import testSort from '../src/data/pokemon/PruebasSort';


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('Retornoa Pokemon bulbasaur`', () => {
    expect(filterData(data,'name','bulbasaur')).toMatchObject([{"about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.", "buddy-distance-km": "3", "egg": "2 km", "encounter": {"base-capture-rate": "0.2", "base-flee-rate": "0.1"}, "evolution": {"candy": "bulbasaur candy", "next-evolution": [{"candy-cost": "25", "name": "ivysaur", "next-evolution": [{"candy-cost": "100", "name": "venusaur", "num": "003"}], "num": "002"}]}, "generation": {"name": "kanto", "num": "generation i"}, "img": "https://www.serebii.net/pokemongo/pokemon/001.png", "name": "bulbasaur", "num": "001", "pokemon-rarity": "normal", "quick-move": [{"base-damage": "7", "energy": "6", "move-duration-seg": "0.6", "name": "vine whip", "type": "grass"}, {"base-damage": "5", "energy": "5", "move-duration-seg": "0.5", "name": "tackle", "type": "normal"}], "resistant": ["water", "electric", "grass", "fighting", "fairy"], "size": {"height": "0.71 m", "weight": "6.9 kg"}, "spawn-chance": "0.69", "special-attack": [{"base-damage": "80", "energy": "-50", "move-duration-seg": "2.3", "name": "sludge bomb", "type": "poison"}, {"base-damage": "55", "energy": "-33", "move-duration-seg": "2.1", "name": "seed bomb", "type": "grass"}, {"base-damage": "90", "energy": "-50", "move-duration-seg": "2.6", "name": "power whip", "type": "grass"}], "stats": {"base-attack": "118", "base-defense": "111", "base-stamina": "128", "max-cp": "1115", "max-hp": "113"}, "type": ["grass", "poison"], "weaknesses": ["fire", "ice", "flying", "psychic"]}]);
  });
  it('Deberia retornar pokemon tipo Dragon"', () => {
    expect(filterData(data,"type","dragon")).toMatchObject(test.tt);
  });
});


describe('sortData', () => {
  it('Es una funcion', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns para dragon en orden Alfabetico', () => {
    expect(sortData(filterData(data,"type","dragon"),"Alfabetico","Ascendente")).toMatchObject(testSort.tt);
  });
});