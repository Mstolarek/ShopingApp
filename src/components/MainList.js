import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {getHistory, getMainList} from '../redux/modules/Lists/Lists.selectors';
import List from './List';

const MainList = ({Direction}) => {
  const Lists = Direction === 'Home' ? useSelector(getMainList) : useSelector(getHistory)
  return (
    <FlatList
      data={Lists}
      numColumns={2}
      keyExtractor={(item) => item.ListId}
      renderItem={({item}) => (
        <List
          ListTitle={item.ListTitle}
          ListContent={item.content}
          ListLength={item.length}
          ListId={item.ListId}
        />
      )}
    />
  );
};

export default MainList;
