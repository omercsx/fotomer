import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View, Button } from 'react-native';
import colors from '../../theme/colors';

const Input = () => {
  const [newComment, setNewComment] = useState('');

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
          }}
          style={styles.image}
        />
        <TextInput
          value={newComment}
          onChangeText={setNewComment}
          style={styles.input}
          placeholder="Add a comment..."
          multiline
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            console.warn('Post shared: ', newComment);
            setNewComment('');
          }}
          title="Post"
          disabled={!newComment}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    right: 15,
  },

  root: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
  },

  input: {
    flex: 1,

    paddingRight: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',

    gap: 10,
  },

  image: {
    width: 40,
    borderRadius: 20,
    aspectRatio: 1,
  },
});
