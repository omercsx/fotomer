import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import type {IPost} from '../../types/models';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FeedGridItem = ({post}: {post: IPost}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: post.image || post.images?.[0]}}
        style={styles.image}
      />
      {post.images && (
        <MaterialIcons
          name="collections"
          size={16}
          color="white"
          style={styles.icon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: 1,
    padding: 1,
    maxWidth: '33.33%',
  },
  image: {
    flex: 1,
    aspectRatio: 1,
  },
  icon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default FeedGridItem;
