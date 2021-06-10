import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {primary, secoundary} from '../constans/colors';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../components/loader';
import {LogIn} from '../redux/modules/Auth/Auth.actions';
import {getUser, getUserLoading} from '../redux/modules/Auth/Auth.selectors';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const buttonHandler = async () => {
    const x = await dispatch(LogIn(login, pass));
  };
  const loading = useSelector(getUserLoading);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>
          Welcome to Shoping List App by M.Chomarek
        </Text>
        <Text style={styles.headerText}>Please Log in</Text>
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.label}>User Name</Text>
        <TextInput
          value={login}
          onChangeText={(newlogin) => setLogin(newlogin)}
          style={styles.input}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          value={pass}
          onChangeText={(newpass) => setPass(newpass)}
          style={styles.input}
          autoCapitalize={'none'}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity onPress={buttonHandler} style={styles.button}>
          <Text style={styles.butttonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreateAcc');
          }}>
          <Text style={{color: secoundary}}>Create Account</Text>
        </TouchableOpacity>
      </View>
      {loading && <Loader />}
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
    color: primary,
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
    backgroundColor: primary,
    borderRadius: 4,
    width: '80%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  butttonText: {color: 'white', fontSize: 24, fontWeight: 'bold'},
});

export default LoginScreen;
