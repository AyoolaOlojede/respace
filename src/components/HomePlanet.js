import React from 'react'
import { Heading,Pane } from 'evergreen-ui';


const HomePlanet= props =>
{
    if (!props.planet) {
        return (
          <div>Loading...</div>
        );
    }
  
    return <Pane>
         <Heading size={700}>Home Planet</Heading>
          <table>
          <th>Title</th>
          <th>Terrain</th>
          <th>Population</th>
          <tr>
              <td>{props.planet.title}</td>
              <td>{props.planet.terrain}</td>
              <td>{props.planet.population}</td>
          </tr>
          </table>
         </Pane>;

};

export default HomePlanet;