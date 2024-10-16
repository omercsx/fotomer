import React from 'react';
import { View, Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { signOut } from 'aws-amplify/auth';

import styles from './styles';
import user from '../../assets/data/user.json';
import Button from '../../components/Button';

import type { ProfileNavigationProp } from '../../types/navigation';

const ProfileHeader = () => {
  const navigation = useNavigation<ProfileNavigationProp>();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image source={{ uri: user.image }} style={styles.avatar} />
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{user.posts.length}</Text>
          <Text style={styles.numberLabel}>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{121}</Text>
          <Text style={styles.numberLabel}>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>100</Text>
          <Text style={styles.numberLabel}>Following</Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>

      <View style={styles.buttonContainer}>
        <Button
          text="Edit Profile"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <Button text="Sign Out" onPress={handleSignOut} />
      </View>
    </View>
  );
};

export default ProfileHeader;
