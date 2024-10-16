import { StyleSheet } from 'react-native';

import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  bio: {
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.regular,
    color: colors.grey,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  name: {
    fontWeight: fonts.weight.semi,
  },
  numberContainer: {
    alignItems: 'center',
  },
  numberText: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.full,
  },
  numberLabel: {
    color: colors.grey,
  },
});

export default styles;
