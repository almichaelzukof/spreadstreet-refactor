import React from 'react';

import Menu from './Menu.jsx';
import Logo from './Logo.jsx';
import Close from './Close.jsx';

const Icon = (props) => {
  switch (props.name) {
    case 'menu':
      return <Menu {...props} />;
    case 'logo':
      return <Logo {...props} />;
    case 'close':
      return <Close {...props} />;
    default:
  }
};

export default Icon;
