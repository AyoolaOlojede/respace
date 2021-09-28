import {Pane} from 'evergreen-ui';
import PropTypes from 'prop-types';
import React from 'react';

const HorizontalPanel = props =>
{
   HorizontalPanel.prototype= {spacing: PropTypes.number};
   return <Pane display="flex"
   flexDirection="row"
  
   className="hbox"
   {...props}>
   {props.children}
   </Pane>;


}

export default HorizontalPanel;