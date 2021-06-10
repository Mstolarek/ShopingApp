import types from './Auth.types';

const initialState = {user: null, loading: false};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return {...state, loading: true};
    case types.LOGIN_USER_FAILED:
      return {...state, loading: false};
    case types.LOGIN_USER_SUCCES:
      return {...state, user: action.payload, loading: false};
    case types.SET_USER:
      return {...state, user: action.payload, loading: false};

    default:
      return state;
  }
};

export default AuthReducer;
