import React, {useState, useEffect} from 'react';
import {app, logoutUser, isLoggedIn} from './../stitch';

import useGlobal from '../store';

const LogoutButton = () => (
  <button className='btn btn-green' onClick={() => onLogout() }>Log Out</button>
);

function Navbar() {
  const [globalState] = useGlobal();
  const {menuItems, stitchUser} = globalState;
  return (
    <nav>
      <ul className='list-reset flex flex-row m-4'>
        {menuItems.map((item) => <li className='p-4'>{item.name}</li>)}
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
