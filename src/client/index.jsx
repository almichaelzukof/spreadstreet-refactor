import React from 'react';
import ReactDOM from 'react-dom';
import {app,
  isLoggedIn,
  loginAnonymous,
  loginGoogle,
  logoutUser,
} from './stitch';
import LoginAnon from './components/LoginAnon';
import App from './components/App';

import './styles.css';

function MyApp(props) {
  return isLoggedIn() ? (
    <App handleLogout={() => logoutUser(app.currentUser)} />
  ) : (
    <LoginAnon loginAnonymous={loginAnonymous} loginGoogle={loginGoogle}/>
  );
}

const rootElement = document.getElementById('index');
ReactDOM.render(<MyApp />, rootElement);
