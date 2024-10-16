import React from 'react';
import { FlatList } from 'react-native';

import UserListItem from '../../components/UserListItem';

import users from '../../assets/data/users.json';

const UserSearchScreen = () => {
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <UserListItem user={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default UserSearchScreen;
