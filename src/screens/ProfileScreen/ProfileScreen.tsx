import React from 'react';

// import { useNavigation } from '@react-navigation/native';
// import { useRoute } from '@react-navigation/native';
import type { IPost } from '../../types/models';

import user from '../../assets/data/user.json';

import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';

// import type {
//   UserProfileNavigationProp,
//   MyProfileNavigationProp,
//   UserProfileRouteProp,
//   MyProfileRouteProp,
// } from '../../navigation/types';

const ProfileScreen = () => {
  // const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  // const userId = route.params?.userId;
  // const navigation = useNavigation<
  //   MyProfileNavigationProp | UserProfileNavigationProp
  // >();

  return (
    <FeedGridView
      data={user.posts as IPost[]}
      ListHeaderComponent={ProfileHeader}
    />
  );
};

export default ProfileScreen;
