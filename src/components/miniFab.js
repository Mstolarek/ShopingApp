import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {useNavigation} from '@react-navigation/core';

Fontisto.loadFont();
import {primary} from '../constans/colors';
import { useDispatch, useSelector } from 'react-redux';
import { addtohistory, deletetab } from '../redux/modules/Lists/Lists.actions';
import { getMainList } from '../redux/modules/Lists/Lists.selectors';

const MiniFab = ({IconName, BgColor, Do , ListId}) => {
const Lists = useSelector(getMainList)
const FoundList = Lists.find((obj)=>{ return obj.ListId === ListId})


  const dispatch = useDispatch()
  
  const IconPosition = IconName === 'nav-icon' ? {left: 25} : {right: 25};
  const onPressHandler = () => {
    Do === 'moveToHistory' ? (dispatch(addtohistory(FoundList)), dispatch(deletetab(FoundList.ListId)) ): dispatch(deletetab(ListId));
  };
  return (
    <TouchableOpacity
      onPress={() => {
        onPressHandler();
      }}
      style={[styles.container, {backgroundColor: BgColor}, IconPosition]}>
      <Fontisto name={IconName} size={16} color={'white'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: 45,
    width: 45,
  },
});

export default MiniFab;
