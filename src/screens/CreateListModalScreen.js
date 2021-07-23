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
  changetaskstatus,
  copylist,
  edittab,
  removeitem,
  resetlist,
} from '../redux/modules/Lists/Lists.actions';

const CreateListModalScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const Lists = useSelector(getMainList);
  const List = useSelector(getList);
  let butttonText;

  const aList = Lists.map((arr) => {
    return arr.ListId === route.params ? Lists[route.params] : null;
  });

  let headerState = `List ${Lists.length}`;
  route.params >= 0
    ? ((headerState = aList[route.params].ListTitle), (butttonText = 'Confirm'))
    : (butttonText = 'Add');

  useEffect(() => {
    route.params >= 0 && dispatch(copylist(aList[route.params]));
  }, []);

  const [headerVal, setHeaderVal] = useState(headerState);
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    dispatch(changename(headerVal));
  }, []);

  const AddButtonHandler = (payload) => {
    return (
      route.params >= 0
        ? dispatch(edittab(payload))
        : dispatch(addtab(payload)),
      dispatch(resetlist()),
      navigation.navigate('Home')
    );
  };
  const AddItemHandler = () => {
    dispatch(additem(inputVal));
    setInputVal('');
  };

  const ArrowIconHandler = () => {
    dispatch(resetlist()), navigation.navigate('Home');
  };

  const RenderItem = ({item}) => {
    const iconName =
      item.taskDone === true ? 'checkbox-active' : 'checkbox-passive';
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => dispatch(changetaskstatus(item.id))}
          style={styles.checkIcon}>
          <Fontisto name={iconName} size={20} color={primary} />
        </TouchableOpacity>
        <Text style={styles.listItemText}>{item.title}</Text>
        <TouchableOpacity
          onPress={() => dispatch(removeitem(item.id))}
          style={styles.crossIcon}>
          <Fontisto name="close-a" size={20} color={secoundary} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.conainer}>
      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => {
            ArrowIconHandler();
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
            inputVal && AddItemHandler();
          }}
          style={styles.input}
        />
      </View>
      <View style={styles.ListView}>
        <FlatList data={List.content} renderItem={RenderItem} />
      </View>
      <TouchableOpacity
        onPress={() => {
          AddButtonHandler(List);
        }}
        style={styles.button}>
        <Text style={styles.butttonText}>{butttonText}</Text>
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
  listItemText: {fontSize: 20, left: 40},
  headerView: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
  },
  arrowIcon: {position: 'absolute', left: 20},
  crossIcon: {position: 'absolute', right: 0},
  checkIcon: {position: 'absolute', alignSelf: 'flex-start'},
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
