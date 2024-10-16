import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface ButtonProps {
  text?: string;
  onPress?: () => void;
}

const Button = ({text = 'Button', onPress = () => {}}: ButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,

    padding: 5,
    alignItems: 'center',
    flex: 1,
    margin: 5,
  },
  text: {
    color: colors.black,
    fontWeight: fonts.weight.semi,
  },
});
