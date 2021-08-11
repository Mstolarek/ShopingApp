import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {primary} from '../constans/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {useNavigation} from '@react-navigation/core';

Fontisto.loadFont();

const FBA = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('CreateList', {ListId: -1, Direction: 'Home'});
      }}
      style={styles.container}>
      <Fontisto name={'plus-a'} size={30} color={'white'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: primary,
    flex: 1,
    position: 'absolute',
    bottom: 16,
    right: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default FBA;
