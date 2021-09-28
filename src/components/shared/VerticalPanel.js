import React from 'react'
import {Pane} from 'evergreen-ui';

const VerticalPanel = props =>
{
    return <Pane display="flex"
    flexDirection="column"
    className="vbox"
    {...props}>{props.children}</Pane>;
}

export default VerticalPanel;