import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  post: {},

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    padding: 10,
  },

  image: {
    width: '100%',
    aspectRatio: 1,
  },

  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },

  threeDots: {
    marginLeft: 'auto',
  },

  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },

  icon: {
    marginHorizontal: 5,
  },

  footer: {
    padding: 10,
  },

  text: {
    color: colors.black,
    lineHeight: 18,
  },

  bold: {
    fontWeight: fonts.weight.bold,
  },
});

export default styles;
