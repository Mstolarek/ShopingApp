import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {getList, getMainList} from '../redux/modules/Lists/Lists.selectors';
import Fontisto from 'react-native-vector-icons/Fontisto';
Fontisto.loadFont();
import {primary, secoundary} from '../constans/colors';
import {useDispatch, useSelector} from 'react-redux';

import {
  additem,
  addtab,
  changename,
  resetlist,
} from '../redux/modules/Lists/Lists.actions';

const CreateListModalScreen = ({navigation}) => {
  const Lists = useSelector(getMainList);
  const List = useSelector(getList);
  const dispatch = useDispatch();
  const [headerVal, setHeaderVal] = useState(`List ${Lists.length}`);
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    dispatch(changename(headerVal));
  }, []);

  const AddButtonHandler = (payload) => {
    return (
      dispatch(addtab(payload)),
      dispatch(resetlist()),
      navigation.navigate('Home')
    );
  };
  const AddItemHandler = () => {
    dispatch(additem(inputVal));
    setInputVal('');
  };

  return (
    <View style={styles.conainer}>
      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.arrowIcon}>
          <Fontisto name="arrow-left" size={40} color={secoundary} />
        </TouchableOpacity>
        <TextInput
          style={styles.headerText}
          value={headerVal}
          onChangeText={(val) => setHeaderVal(val)}
          onEndEditing={() => {
            dispatch(changename(headerVal));
          }}
        />
      </View>
      <View>
        <TextInput
          value={inputVal}
          placeholder={'Add new item to list'}
          onChangeText={(x) => {
            setInputVal(x);
          }}
          onEndEditing={() => {
            AddItemHandler();
          }}
          style={styles.input}
        />
      </View>
      <View style={styles.ListView}>
        <FlatList
          data={List.content}
          renderItem={({item}) => (
            <Text style={styles.listItemText}>{item.title}</Text>
          )}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          AddButtonHandler(List);
        }}
        style={styles.button}>
        <Text style={styles.butttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  conainer: {flex: 1},
  ListView: {
    alignSelf: 'center',
    flex: 1,
    bottom: 110,
    width: '80%',
  },
  listItemText: {fontSize: 16},
  headerView: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
  },
  arrowIcon: {position: 'absolute', left: 20},
  headerText: {
    marginHorizontal: 15,
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: primary,
  },
  input: {
    alignSelf: 'center',
    width: '80%',
    height: '15%',
    margin: 20,
    borderWidth: 1,
    borderRadius: 4,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: primary,
    borderRadius: 8,
    width: '80%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    bottom: 30,
    position: 'absolute',
  },
  butttonText: {color: 'white', fontSize: 24, fontWeight: 'bold'},
});

export default CreateListModalScreen;
