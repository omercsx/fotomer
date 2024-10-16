import React, {useState} from 'react';
import {View, Text} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../theme/colors';
import styles from './styles';

import type {IComment} from '../../types/models';
import DoublePressable from '../DoublePressable';
import {Image} from 'react-native';

interface CommentProps {
  comment: IComment;
  includeDetails?: boolean;
}

const Comment = ({comment, includeDetails = false}: CommentProps) => {
  const {user, comment: commentBody} = comment;
  const [isLiked, setIsLiked] = useState(false);

  const toggleLiked = () => {
    setIsLiked(v => !v);
  };

  return (
    <DoublePressable onDoublePress={toggleLiked} prevLike={isLiked}>
      <View style={styles.comment}>
        {includeDetails && (
          <Image source={{uri: user.image}} style={styles.avatar} />
        )}
        <View style={styles.middleColumn}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>{user.username}</Text> {commentBody}
          </Text>
          {includeDetails && (
            <View style={styles.footer}>
              <Text style={styles.footerText}>2d</Text>
              <Text style={styles.footerText}>5 likes</Text>
              <Text style={styles.footerText}>Reply</Text>
            </View>
          )}
        </View>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          size={16}
          color={isLiked ? colors.accent : colors.black}
          onPress={toggleLiked}
        />
      </View>
    </DoublePressable>
  );
};

export default Comment;
