import React, {useState, useEffect} from 'react';
import {app, logoutUser, isLoggedIn} from './../stitch';

import useGlobal from '../store';

const LogoutButton = () => (
  <button className='btn btn-green' onClick={() => onLogout() }>Log Out</button>
);

const handleLinks = (menuItems) => {
  // if (loggedIn) {
  //   const hidden = ['Sign Up', 'Login'];
  //   return menuItems.filter((item) => !hidden.includes(item.name));
  // }
  const hidden = ['Sign Out'];
  return menuItems.filter((item) => !hidden.includes(item.name));
};

function Navbar() {
  const [globalState] = useGlobal();
  const {menuItems} = globalState;
  return (
    <nav>
      <ul className='list-reset flex flex-row m-4'>
        {handleLinks(menuItems).map((item) => <li className='p-4'>{item.name}</li>)}
      </ul>
      <LogoutButton />
    </nav>
  );
}

export default Navbar;

function onLogout() {
  logoutUser(app.auth.user).then(() =>{
    window.location.reload();
  });
}
