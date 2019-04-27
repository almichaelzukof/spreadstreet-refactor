import React from 'react';
import useGlobalHook from './useGlobalHook';

import * as actions from '../actions';

const initialState = {
  stitchUser: null,
  status: 'INITIAL',
  endpoints: [],
  parsed: [],
  menuItems: [
    {name: 'Browse', link: '/browse', key: '0'},
    // { name: 'Add', link: '/add', key: '1' },
    {name: 'Sign Up', link: '/signup', key: '2'},
    {name: 'Login', link: '/login', key: '3'},
    {name: 'Sign Out', link: '/login', key: '4'},
  ],
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
