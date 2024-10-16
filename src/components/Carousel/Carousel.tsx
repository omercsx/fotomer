import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
  View,
} from 'react-native';
import DoublePressable from '../DoublePressable';
import type {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

import colors from '../../theme/colors';

interface CarouselProps {
  images: string[];
  onDoublePress?: () => void;
  prevLike?: boolean;
}

const Carousel = ({images, onDoublePress, prevLike}: CarouselProps) => {
  const windowWidth = useWindowDimensions().width;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / windowWidth);
    setActiveImageIndex(slide);
  };

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePress} prevLike={prevLike}>
            <Image
              source={{uri: item}}
              style={[styles.image, {width: windowWidth}]}
            />
          </DoublePressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
      />
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={
              activeImageIndex === index
                ? styles.dot
                : [styles.dot, styles.selectedDot]
            }
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
  },

  dotsContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: colors.primary,
    margin: 5,
  },

  selectedDot: {
    backgroundColor: colors.lightgrey,
  },
});
