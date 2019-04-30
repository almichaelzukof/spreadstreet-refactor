import React from 'react';
import App from './App';
import Icon from './Icons/Index';
import ErrorBoundary from 'react-error-boundary';
import {app} from '../stitch';
import {CustomCredential} from 'mongodb-stitch-browser-sdk';

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
  const jwtString = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidXNlcm5hbWU5MDAwQHVzZXJycm5hbWUuY29tIiwidXNlcm5hbWUiOiIwbzk5cHJ0NWRmM2xxY3RtbHZ4N25jIiwiY3JlYXRlZEF0IjoiMjAxOS0wNC0zMFQxNjowMDozMS4wMjdaIiwidXBkYXRlZEF0IjoiMjAxOS0wNC0zMFQxNjowMDozMS4wMjdaIiwiaWQiOiI1Y2M4NzExZjNiNjY5ZTQ5MDg5OTE3MTQifSwiaWF0IjoxNTU2NjQyMTQwLCJleHAiOjE1NTcyNDY5NDAsImF1ZCI6ImFwaS1odWItYmVic2YiLCJzdWIiOiJ1c2VybmFtZTkwMDBAdXNlcnJybmFtZS5jb20ifQ.tNUMU4FTdpAYf6VLWTVF2FekX75kNTrYkArO_a_6x5Y';

  const credential = new CustomCredential(jwtString);

  app.auth.loginWithCredential(credential)
      .then((authedUser) => console.log(`logged in with custom auth as user ${authedUser.id}`))
      .catch( (err) => console.error(`failed to log in with custom auth: ${err}`));

  return stitchUser ? <App /> : (
    <section className='h-screen w-screen flex sm:pt-8 md:pt-12 lg:pt-20 lg:cover-background m-4'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row'>
          <div className="flex flex-col mb-6 md:w-1/2">
            <div className="block mb-4">
              <Icon name="logo" className="fill-current w-8 h-8 text-grey-darker float-left" />
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-grey-darker">
                Spreadstreet
              </p>
            </div>
            <div className="mb-12">
              <h1 className="font-semibold text-grey-darkest text-4xl sm:text-5xl md:text-6xl mb-4 leading-none">
                API Data in Google Sheets
              </h1>
              <p className="text-xl sm:text-2xl text-grey-darkest leading-normal max-w-lg">
              Spreadstreet is the easy way to get cryptocurrency data directly into Google Sheets.
              </p>
            </div>
            <Login />
          </div>
        </div>
      </div>
    </section>
  );
}

