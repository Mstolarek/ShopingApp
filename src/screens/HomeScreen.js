import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import FBA from '../components/FBA';
import Fontisto from 'react-native-vector-icons/Fontisto';
Fontisto.loadFont();
import {secoundary} from '../constans/colors';
import {SignOutUser} from '../services/FireBaseAuthService';

import MainList from '../components/MainList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Home</Text>
        <TouchableOpacity
          onPress={() => SignOutUser()}
          style={styles.settingsIcon}>
          <Fontisto name="linux" size={40} color={secoundary} />
        </TouchableOpacity>
      </View>

      <MainList Direction={'Home'} />
      <FBA />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  headerView: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
  },
  settingsIcon: {position: 'absolute', right: 20},
  headerText: {
    marginHorizontal: 15,
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
