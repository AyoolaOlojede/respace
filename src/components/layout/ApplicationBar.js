import { Heading, Pane } from "evergreen-ui";
import React from "react";

const ApplicationBar= props=>{

  return (
    <Pane
      flexShrink={0}
      display="flex"
      padding={16}
      background="tint2"
      borderRadius={3}
    >
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={600}>{props.title}</Heading>
      </Pane>
      <Pane display="flex" alignItems="center">
        {props.children}
      </Pane>
    </Pane>
  );
}

export default ApplicationBar;