import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {useDispatch} from 'react-redux';

const AddButtonHandler = (payload) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return console.log('udalo sie');
  //   return dispatch(addtab(payload));
  //   navigation.navigate('Home');
};

export default AddButtonHandler;
