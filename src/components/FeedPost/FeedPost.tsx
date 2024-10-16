import React, {useState} from 'react';
import styles from './styles';
import {View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Comment from '../Comment';
import Carousel from '../Carousel';
import DoublePressable from '../DoublePressable';
import VideoPlayer from '../VideoPlayer';

import colors from '../../theme/colors';
import type {IPost} from '../../types/models';
import type {FeedNavigationProp} from '../../types/navigation';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface FeedPostProps {
  post: IPost;
  isVisible: boolean;
}

const FeedPost = ({post, isVisible}: FeedPostProps) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation<FeedNavigationProp>();

  const {
    user,
    image,
    images,
    description,
    createdAt,
    nofLikes,
    nofComments,
    comments,
    video,
  } = post;

  const navigateToUser = () => {
    navigation.navigate('UserProfile', {userId: user.id});
  };

  const navigateToComments = () => {
    navigation.navigate('Comments', {postId: post.id});
  };

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(v => !v);
  };

  const toggleLiked = () => {
    setIsLiked(v => !v);
  };

  let content = null;
  if (image) {
    content = (
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
    );
  } else if (images) {
    content = (
      <Carousel
        images={images}
        onDoublePress={toggleLiked}
        prevLike={isLiked}
      />
    );
  } else if (video) {
    content = (
      <DoublePressable onDoublePress={toggleLiked} prevLike={isLiked}>
        <VideoPlayer uri={video} paused={!isVisible} />
      </DoublePressable>
    );
  }

  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName} onPress={navigateToUser}>
          {user.username}
        </Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          color="gray"
          style={styles.threeDots}
        />
      </View>

      {content}

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={24}
            style={styles.icon}
            color={isLiked ? colors.accent : colors.black}
            onPress={toggleLiked}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>{user.username}</Text> and{' '}
          <Text style={styles.bold}>{nofLikes} others</Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 2}>
          <Text style={styles.bold}>{user.username}</Text> {description}
        </Text>
        <Text
          onPress={toggleDescriptionExpanded}
          style={{color: colors.primary}}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>

        {/* Post comments */}
        <Text style={{color: colors.lightgrey}} onPress={navigateToComments}>
          View all {nofComments} comments
        </Text>

        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/* Post date */}
        <Text style={{color: colors.lightgrey}}>{createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
