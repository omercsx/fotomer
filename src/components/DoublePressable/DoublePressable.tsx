import React from 'react';
import { Pressable } from 'react-native';

interface DoublePressableProps {
  onDoublePress?: () => void;
  prevLike?: boolean;
  children: React.ReactNode;
}

const DoublePressable = ({
  onDoublePress = () => {},
  children,
  prevLike = false,
}: DoublePressableProps) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now(); // timestamp
    if (now - lastTap < 300 && !prevLike) {
      onDoublePress();
    }
    lastTap = now;
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default DoublePressable;