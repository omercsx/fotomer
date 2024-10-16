import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Video, {VideoRef} from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

interface VideoPlayerProps {
  uri: string;
  paused: boolean;
}

const VideoPlayer = ({uri, paused}: VideoPlayerProps) => {
  const videoRef = useRef<VideoRef>(null);
  const [isMuted, setIsMuted] = useState(true);
  const toggleMuted = () => {
    setIsMuted(v => !v);
  };

  return Video ? (
    <View style={styles.videoContainer}>
      <Video
        source={{uri}}
        style={styles.video}
        ref={videoRef}
        resizeMode="contain"
        repeat
        muted={isMuted}
        paused={paused}
        onTouchEnd={toggleMuted}
      />
      <TouchableOpacity style={styles.mutedButton} onPress={toggleMuted}>
        <Ionicons
          name={isMuted ? 'volume-mute' : 'volume-high'}
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  ) : null;
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },

  videoContainer: {
    position: 'relative',
  },

  mutedButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
