import types from './Auth.types';

import {SignInUser} from '../../../services/FireBaseAuthService';

export const LogIn = (login, pass) => async () => {
  return await SignInUser(login, pass);
};

export const setUser = (user) => {
  return {type: types.SET_USER, payload: user};
};
