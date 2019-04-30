import React from 'react';
import App from './App';
import ErrorBoundary from 'react-error-boundary';
import {required, nonEmpty, email} from '../utils/validators';
import {app} from '../stitch';

import useGlobal from '../store';
import RenderField from './Input/RenderField';
import Login from './Login/Login';

export default function LoginAnon(props) {
  return (
    <ErrorBoundary>
      <LoginForm {...props} />
    </ErrorBoundary>
  );
}

export function LoginForm(props) {
  const [globalState, globalActions] = useGlobal();
  const {stitchUser} = globalState;
  const {loginGoogle} = props;
  if (app.auth.hasRedirectResult()) {
    console.log('we have a redirect result');
    app.auth.handleRedirectResult().then((stitchUser) => {
      console.log(stitchUser);
      globalActions.auth.setStitchUser(stitchUser);
    });
  }

  return stitchUser ? <App /> : (
    <div className='container mx-auto'>
      <div className='flex flex-col content-center items-center h-screen justify-center'>
        <header className=''>
          <img src='https://d33wubrfki0l68.cloudfront.net/cd8037bd6ee2c6e2bed98237fa97a0364e60153b/7ace2/img/sslogoclear.png' alt='Spreadstreet logo' />
          <h1 className='text-center mt-16'>Spreadstreet</h1>
        </header>
        <Login />
      </div>
    </div>
  );
}

