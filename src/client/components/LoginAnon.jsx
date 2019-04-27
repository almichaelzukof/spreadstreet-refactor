import React from 'react';
import App from './App';
import ErrorBoundary from 'react-error-boundary';

import useGlobal from '../store';

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
  const {loginAnonymous} = props;
  const handleLogin = () => {
    loginAnonymous().then((stitchUser) => {
      // window.location.reload();
      // window.open("https://script.google.com/macros/s/web_app_ID/dev",'_top');
      globalActions.auth.setStitchUser(stitchUser);
    });
  };

  return stitchUser ? <App /> : (
    <div inverse color="dark">
      <button onClick={handleLogin}>Log in as Anonymous</button>
    </div>
  );
}

