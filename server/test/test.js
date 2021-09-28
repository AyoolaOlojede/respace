const {getPeopleById,getHomePlanet,getFilms,getSpecies}=require('../controllers/swapi.api');
const mockAxios = require('axios');
const { default: axios } = require('axios');



let person;
beforeAll(()=>
{
  person = {
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/"
    ],
    "species": [
      "https://swapi.dev/api/species/2/"
    ],
    "url": "https://swapi.dev/api/people/2/"
  };
});
 
//jest.mock('axios');
//mockAxios.get.mockResolvedValue("C-3PO");
describe('swapi tests', () => {
  afterEach(jest.clearAllMocks);
    test('should return the person name by his id ', async () => {

        const people= await getPeopleById(2);
        expect(people).toBeDefined();
    })
})


describe('Test HomePlanet', () => {

    test('should return the person home planet ', () => {
       expect(getHomePlanet(person.homeworld)).toEqual(Promise.resolve());
    })

    test('should return error on when rejected', () => {
        jest.fn().mockImplementation(() => {return Promise.reject({ok: false});});
          getHomePlanet(person.homeworld).catch(err=>{expect(err).toEqual("error");});
    })
})

describe('Test Films', () => {
     test('should return the films details', () => {
         expect(getFilms(person.films)).toEqual(Promise.resolve());
     })

     test('should return error on when rejected', () => {
        jest.fn().mockImplementation(() => {return Promise.reject({ok: false}); });
          getFilms(person.films).catch(err=>{expect(err).toEqual("error");});
    })
})


describe('Test Species', () => {
    test('should return all species', () => {
        expect(getSpecies(person.species)).toEqual(Promise.resolve());
    })

    test('should return error on when rejected', () => {
        jest.fn().mockImplementation(() => {return Promise.reject({ok: false});});
          getSpecies(person.species).catch(err=>  {expect(err).toEqual("error");});
    })
})










