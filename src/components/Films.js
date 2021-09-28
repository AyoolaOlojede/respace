import React from 'react'
import { Paragraph,Pane,Heading } from 'evergreen-ui';


const Films= props =>
{
    if (!props.films) {
        return (
          <div>Loading...</div>
        );
    }
    return <Pane>
          <Heading size={700}>Films</Heading>
          <table>
              <th>Title</th>
              <th>Director</th>
              <th>Producers</th>
              <th>Release Date</th>
              <tbody>
              
          {props.films.map(film=>
        {
            return <tr key={film.title}>
                <td><Paragraph >{film.title}</Paragraph></td>
                <td><Paragraph >{film.director}</Paragraph></td>
                <td><Paragraph >{film.producer}</Paragraph></td>
                <td><Paragraph >{film.release_date}</Paragraph></td>
            </tr>
        })}
        </tbody>
        </table>
         </Pane>;

};

export default Films;