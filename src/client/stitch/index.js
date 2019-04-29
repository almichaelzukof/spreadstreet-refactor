import {app, endpoints, assets} from './stitch';
import {fetchEndpoints} from './queries';
import {
  loginAnonymous,
  loginGoogle,
  isLoggedIn,
  logoutUser,
} from './authentication';

export {app, endpoints, assets};
export {fetchEndpoints};
export {
  loginAnonymous,
  loginGoogle,
  isLoggedIn,
  logoutUser,
};
