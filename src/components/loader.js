import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const Loader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.loaderContainer]}>
      <ActivityIndicator></ActivityIndicator>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    backgroundColor: '#ffffffcc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
