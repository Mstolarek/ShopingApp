import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {getMainList} from '../redux/modules/Lists/Lists.selectors';
import List from './List';

const MainList = () => {
  const Lists = useSelector(getMainList);
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
        />
      )}
    />
  );
};

export default MainList;
