import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Animated,
  Pressable,
  Easing,
} from 'react-native';
import {secoundary, primary} from '../constans/colors';
import {useNavigation} from '@react-navigation/native';
import MiniFab from './miniFab';

const List = ({ListTitle, ListContent, ListLength, ListId}) => {
  const listData = ListContent.slice(0, 3);
  const navigation = useNavigation();

  const value = useRef(new Animated.Value(0)).current;

  const eavenIndicator = (value) => {
    if (value % 2 == 0) return '100%';
    else return '40%';
  };

  const onLongPressHandler = () => {
    Animated.spring(value, {
      // duration: 300,
      toValue: 1,
      // friction: 1,
      // bounciness: 5000,
      stiffness: 100,
      // easing: Easing.bounce,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(value, {
          duration: 300,
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }, 5000);
    });
  };

  const scale = value.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'extend',
  });

  return (
    <View style={[styles.container, {maxWidth: eavenIndicator(ListLength)}]}>
      <Pressable
        onLongPress={() => {
          onLongPressHandler();
        }}
        onPress={() => {
          navigation.navigate('CreateList', ListId);
        }}
        style={{flex: 1, padding: 5, position: 'relative'}}>
        <FlatList
          data={listData}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <Text style={styles.listElementText}>{ListTitle}</Text>
          }
        />

        <Animated.View
          style={[
            styles.longPressView,
            {
              transform: [{scale: value}],
            },
          ]}>
          <MiniFab
            IconName={'nav-icon'}
            BgColor={primary}
            Do={'moveToHistory'}
            ListId={ListId}
          />
          <MiniFab
            IconName={'close-a'}
            BgColor={primary}
            Do={'delete'}
            ListId={ListId}
          />
        </Animated.View>
      </Pressable>
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
  longPressView: {
    flexDirection: 'row',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: '107%',
    height: 80,
    borderRadius: 6,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  longPressText: {color: 'white'},
  listElementText: {fontSize: 16, fontWeight: 'bold', color: secoundary},
});

export default List;
