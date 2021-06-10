import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TextInput from '../components/TextInput';
import {useNavigation} from '@react-navigation/native';
import {CreateUser} from '../services/FireBaseAuthService';
import ErrorMessage from '../components/ErrorMessage';

const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorProp, setErrorProp] = useState('');
  const SignUpButtonHandler = async () => {
    try {
      setErrorProp('');
      await CreateUser(login, password);
    } catch (error) {
      console.log(error);

      if (error.code === 'auth/email-already-in-use') {
        setErrorProp('This e-mail is already in use');
      } else if (error.code === 'auth/invalid-email') {
        setErrorProp('This e-mail is invalid');
      } else if (error.code === 'auth/weak-password') {
        setErrorProp('The given password is invalid');
      } else {
        setErrorProp('Unknown error');
      }
    }

    // navigation.navigate('Login');
  };
  console.log(errorProp);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Create Account</Text>
      <View style={styles.inputArea}>
        <TextInput
          label={'E-mail'}
          value={login}
          onChangeText={(newlog) => setLogin(newlog)}
          style={styles.input}
        />

        <TextInput
          label={'Password'}
          value={password}
          onChangeText={(newpass) => setPassword(newpass)}
          style={styles.input}
          autoCapitalize={'none'}
          secureTextEntry={true}
        />
      </View>

      <ErrorMessage message={errorProp} />

      <View style={styles.buttonArea}>
        <TouchableOpacity
          onPress={() => SignUpButtonHandler()}
          style={styles.button}>
          <Text style={styles.butttonText}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{color: 'cornflowerblue'}}>Back to Log In Screen</Text>
        </TouchableOpacity>
      </View>
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

export default CreateAccountScreen;
