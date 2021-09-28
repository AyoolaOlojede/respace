import React from 'react';
import {Heading, Icon, Link, Pane} from 'evergreen-ui';

const Footer= () =>
{
   return <Pane marginTop="auto" display="flex" flexShrink={0} padding={16}>
  <Pane flex={1} alignItems="center" display="flex" flexDirection="row">
      <Heading size={100}>RedSpac &copy; 2020 - {new Date().getFullYear()}, All rights reserved</Heading>
  </Pane>

  <Pane display="flex" alignItems="center" flexDirection="row">
      <Link href="#" display="flex" flexDirection="row" alignItems="center"
            color="neutral">
          <Icon icon="heart" color="warning"
                size={12} marginLeft={2}
                marginRight={2}/></Link>

  </Pane>
</Pane>;
}

export default Footer;