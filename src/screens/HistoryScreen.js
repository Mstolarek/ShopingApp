import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainList from '../components/MainList';

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>History</Text>
      <MainList Direction={'History'} />
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
});

export default HistoryScreen;
