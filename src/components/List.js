import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {secoundary, primary} from '../constans/colors';

const List = ({ListTitle, ListContent, ListLength}) => {
  const eavenIndicator = (value) => {
    if (value % 2 == 0) return '100%';
    else return '40%';
  };
  return (
    <View style={[styles.container, {maxWidth: eavenIndicator(ListLength)}]}>
      <TouchableOpacity style={{padding: 5}}>
        <FlatList
          data={ListContent}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <Text style={styles.listElementText}>{ListTitle}</Text>
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    borderWidth: 2,
    borderColor: primary,
    borderRadius: 8,
    margin: 15,
  },
  listElementText: {fontSize: 16, fontWeight: 'bold', color: secoundary},
});

export default List;
