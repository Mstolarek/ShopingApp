import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

export const CreateUser = async (login, password) => {
  return auth().createUserWithEmailAndPassword(login, password);
};

export const SignInUser = async (login, password) => {
  return auth().signInWithEmailAndPassword(login, password);
};
