import React from 'react'
import { Paragraph,Pane, Heading } from 'evergreen-ui';


const Species= props =>
{

    if (!props.species) {
        return (
          <div>Loading...</div>
        );
    }

    return <Pane marginLeft={50}>
      <Heading size={700}>Species</Heading>
      <table>
          <th>Name</th>
          <th>Average Lifespan</th>
          <th>Classification</th>
          <th>Language</th>
      {props.species.map(spec=>
        {
            return <tr key={spec.name}>
            <td>{spec.name}</td>
            <td>{spec.average_lifespan}</td>
            <td>{spec.classification}</td>
            <td>{spec.language}</td>
            </tr>
        })}
        </table>
         </Pane>;

};

export default Species;