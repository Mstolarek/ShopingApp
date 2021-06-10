import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {errorText} from '../constans/colors';

const ErrorMessage = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', alignItems: 'center'},
  text: {fontSize: 16, fontWeight: 'bold', color: errorText},
});

export default ErrorMessage;
