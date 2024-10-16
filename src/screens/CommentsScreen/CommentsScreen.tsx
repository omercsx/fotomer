import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import Comment from '../../components/Comment';
import Input from './Input';

import comments from '../../assets/data/comments.json';

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        renderItem={({ item }) => <Comment comment={item} includeDetails />}
        style={styles.comments}
      />
      <Input />
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  comments: {
    padding: 10,
  },

  container: {
    flex: 1,
  },
});
