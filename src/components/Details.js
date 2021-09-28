import React, { useEffect, useState } from 'react'
import {Heading,Pane } from 'evergreen-ui';
import HorizontalPanel from './shared/HorizontalPanel';
import HomePlanet from './HomePlanet';
import Species from './Species';
import Films from './Films';
import VerticalPanel from './shared/VerticalPanel';







const Details= props =>
{
    const [personData,setPersonData]=useState({});

    useEffect(() => {
    
    async function fetchSwapi() {
      let response= await fetch(`http://localhost:3001/people/${props.personId}`);
      response= await response.json();
      setPersonData(response);
    }

    fetchSwapi();
        
    },[props.personId])

    return <VerticalPanel>
    <HorizontalPanel>
  <Pane size={300} marginTop={12}  alignItems="left" justifyContent="left">
  <Heading size={700}>Details</Heading>
    <table>
      <th>Name</th><th>Height</th><th>Mass</th><th>Hair Color</th><th>Skin Color</th><th>Gender</th><th>Birth Year</th>
    <tr>
    <td>Name: {personData.name}</td><td > Height: {personData.height}</td>
    <td>Mass: {personData.mass}</td><td>Hair Color: {personData.hair_colo}</td>
    <td>Skin Color: {personData.skin_color}</td><td>Gender: {personData.gender}</td>
    <td>Birth Year {personData.birth_year}</td>
    </tr>
    </table>
  </Pane>
  </HorizontalPanel>
  <HorizontalPanel>
    <Pane size={300} marginTop={12}> 
    <HomePlanet planet={personData.homeplanetData}/>
  </Pane>
  <Pane size={400} marginTop={12}>
  <Species species={personData.speciesData}/>
  </Pane>
  </HorizontalPanel>
 
  <HorizontalPanel>
  <Pane marginTop={16}>
 <Films films={personData.filmsData}/>
  </Pane>
    </HorizontalPanel>
    </VerticalPanel>;

};

export default Details;