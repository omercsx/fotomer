import React from 'react';
import {Pressable, Text, Image, StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import type {IUser} from '../../types/models';
import type {UserProfileNavigationProp} from '../../types/navigation';

interface UserListItemProps {
  user: IUser;
}

const UserListItem = ({user}: UserListItemProps) => {
  const navigation = useNavigation<UserProfileNavigationProp>();

  const goToUserScreen = () => {
    navigation.navigate('UserProfile', {userId: user.id});
  };

  return (
    <Pressable onPress={goToUserScreen} style={styles.container}>
      <Image source={{uri: user.image}} style={styles.image} />

      <View style={styles.rightContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  name: {
    fontWeight: '500',
    marginLeft: 10,
  },

  rightContainer: {
    flex: 1,
  },

  username: {
    marginLeft: 10,
    color: 'gray',
  },
});

export default UserListItem;
