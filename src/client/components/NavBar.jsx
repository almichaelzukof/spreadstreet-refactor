import React, {useState, useEffect} from 'react';
import {app, logoutUser} from './../stitch';

const LogoutButton = () => (
  <button className='btn btn-green' onClick={() => onLogout() }>Log Out</button>
);

const initialState = {
  showMenu: false,
  menuItems: [
    {name: 'Browse', link: '/browse', key: '0'},
    // { name: 'Add', link: '/add', key: '1' },
    {name: 'Sign Up', link: '/signup', key: '2'},
    {name: 'Login', link: '/login', key: '3'},
    {name: 'Sign Out', link: '/login', key: '4'},
  ],
};

const handleLinks = (menuItems) => {
  if (loggedIn) {
    const hidden = ['Sign Up', 'Login'];
    return menuItems.filter((item) => !hidden.includes(item.name));
  }
  const hidden = ['Sign Out'];
  return menuItems.filter((item) => !hidden.includes(item.name));
};

function Navbar() {
  const [menuItems, setMenuItems] = useState(initialState.menuItems);
  return (
    <nav>
      <ul className='list-reset flex flex-row m-4'>
        {handleLinks().map((item) => <li className='p-4'>{item.name}</li>)}
      </ul>
    </nav>
  );
}

export default Navbar;

function onLogout() {
  logoutUser(app.auth.user).then(() =>{
    window.location.reload();
  });
}
