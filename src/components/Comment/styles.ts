import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 5,
  },

  bold: {
    fontWeight: fonts.weight.bold,
  },

  comment: {
    flexDirection: 'row',
  },

  commentText: {
    lineHeight: 18,
  },

  middleColumn: {
    flex: 1,
  },

  footerText: {
    marginRight: 10,
  },

  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default styles;
