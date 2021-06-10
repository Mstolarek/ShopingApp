import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>History</Text>
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
