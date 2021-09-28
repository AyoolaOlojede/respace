import React, { useState } from 'react';
import Details from './Details';
import {Pane, SelectField } from 'evergreen-ui';
import VerticalPanel from './shared/VerticalPanel';
import HorizontalPanel from './shared/HorizontalPanel';




const StarWarsCharaters= () => {

  const people =[
    { id: 1, name: 'Luke SkyWalker' },
    { id: 2, name: 'C-3PO'},
    { id: 3,  name: 'R2-D2'},
    { id: 4, name: 'Darth Vader'},
    { id: 6, name: 'Owen Lars'},
    { id: 7, name: 'Beru Whitesun lars'},
    { id: 13, name: 'Chewbacca'},
    { id: 5, name: 'Leia Organa'}
  ];

  const [personId,setPersonId]=useState(1);

   function handleSelectedChange(evt)
   {
      setPersonId(evt.target.value);
   }


  return ( 
  
    <Pane display="flex" padding={20} 
    alignItems="center" justifyContent="center" border="default" >
         <form>
         <SelectField width={300} 
          label="StarWars Characters"
          description="Details"
         value={personId} onChange={handleSelectedChange}>
          {people.map(person =>{
            return <option value={person.id} key={person.id}>{person.name}</option>;
          })}
            </SelectField>
            <Details personId={personId}/>
        </form>
        </Pane>
        );

};

export default StarWarsCharaters;