import React from 'react';
import HorizontalPanel from '../shared/HorizontalPanel';
import VerticalPanel from '../shared/VerticalPanel';
import StarWarsCharaters from '../StarWarsCharacters';



const Dashboard = props =>
{
    return  (
         <VerticalPanel flex={1}>
    <HorizontalPanel>

    </HorizontalPanel>

    <VerticalPanel background="#ffffff"  flex={1}>
      <StarWarsCharaters/>
    </VerticalPanel>

  </VerticalPanel>
);
}

export default Dashboard;