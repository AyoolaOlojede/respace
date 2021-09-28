const axios = require('axios');

const BASE_URL = 'https://swapi.dev/api/';

var getCharacter =async (req, res) => {

    try {
        
   
	const { id } = req.params;
  const character =await getPeopleById(id);
  const data = character.data;
  const homePlanet=getHomePlanet(data.homeworld);
  const species = getSpecies(data.species);
  const films = getFilms(data.films);
  const result = await Promise.all([homePlanet,species,films]);
  data.homeplanetData = result[0]
  data.speciesData = result[1]
  data.filmsData = result[2]
 return res.status(200).send(data);
   } catch (error) {
        console.log(error);
    }

};

async function getPeopleById(id) {
    try {
        const person = await axios.get(BASE_URL+`people/${id}`);
        return person;
    } catch (error) {
        console.log(error);
    }

    return {};
   
}

 function getHomePlanet(planet_url) {
    return axios.get(planet_url)
    .then(res=>res.data)
    .then(planet => ({ title: planet.name,terrain:planet.terrain, population: planet.population }))
    .catch(err=>console.log(err));
}

function getFilms(films_url) {
    const films = films_url.map(film => {
        return axios.get(film)
        .then(res=>res.data)
        .then(film => ({ title: film.title,director:film.director,producer:film.producer, release_date:film.release_date }))
        .catch(err=>console.log(err));
    })
    return Promise.all(films);
}

function getSpecies (species_url) {
    if(!species_url){
      return "";
    }
 const species = species_url.map(specie => {
    return axios.get(specie)
    .then(res=>res.data)
    .then(specie => ({ name:specie.name, 
        average_lifespan:specie.average_lifespan,
         classification:specie.classification, language:specie.language }))
    .catch(err=>console.log(err));
    })
    return Promise.all(species);
}

module.exports = {getCharacter,getPeopleById,getHomePlanet,getFilms,getSpecies};
