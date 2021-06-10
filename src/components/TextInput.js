import React from 'react';
import {Text, TextInput as Input, StyleSheet} from 'react-native';

const TextInput = ({label, ...props}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.input} {...props} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 4,
    width: '80%',
    height: '10%',
    marginBottom: 20,
  },
  label: {fontSize: 16, alignSelf: 'flex-start', margin: 5, marginLeft: 40},
});

export default TextInput;
