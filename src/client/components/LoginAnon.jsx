import React, {useState} from 'react';
import ErrorBoundary from 'react-error-boundary';

export default function LoginAnon(props) {
  return (
    <ErrorBoundary>
      <LoginForm {...props} />
    </ErrorBoundary>
  );
}

export function LoginForm(props) {
  const {loginAnonymous} = props;
  const handleLogin = () => {
    loginAnonymous().then(() => {
      window.location.reload();
    });
  };

  return (
    <div inverse color="dark">
      <button onClick={handleLogin}>Log in as Anonymous</button>
    </div>
  );
}

