import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux/modules/Auth/Auth.actions';

const AuthManager = () => {
  const dispatch = useDispatch();
  const onAuthStateChanged = (user) => {
    console.log(user);
    dispatch(setUser(user));
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  return null;
};

export default AuthManager;
