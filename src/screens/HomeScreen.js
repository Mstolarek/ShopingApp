import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import FBA from '../components/FBA';

import MainList from '../components/MainList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Home</Text>
      <MainList />
      <FBA />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  headerText: {
    margin: 15,
    marginTop: 50,
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'chocolate',
  },
  label: {fontSize: 16, alignSelf: 'flex-start', margin: 5, marginLeft: 40},
  inputArea: {
    alignItems: 'center',
    margin: 15,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    width: '80%',
    height: '10%',
    marginBottom: 20,
  },
  buttonArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'chocolate',
    borderRadius: 4,
    width: '80%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  butttonText: {color: 'white', fontSize: 24, fontWeight: 'bold'},
});

export default HomeScreen;
