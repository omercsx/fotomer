import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../../theme/colors';
import { Control, Controller } from 'react-hook-form';
import type { IUser } from '../../types/models';

export type IEditableUser = Pick<
  IUser,
  'username' | 'name' | 'website' | 'bio'
>;

interface CustomInputProps {
  label: string;
  control: Control<IEditableUser, object>;
  name: keyof IEditableUser;
  rules?: {};
  multiline?: boolean;
}

const CustomInput = ({
  label,
  control,
  name,
  rules,
  multiline = false,
}: CustomInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              value={value?.toLowerCase()}
              onChangeText={onChange}
              onBlur={onBlur}
              style={styles.input}
              placeholder={label}
              multiline={multiline}
            />
            {error && <Text style={styles.error}>{error.message}</Text>}
          </View>
        </View>
      )}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 10,
  },
  label: {
    fontWeight: 'bold',
    width: 75,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,

    padding: 5,
  },
  inputWrapper: {
    flex: 1,
  },
  error: {
    color: 'red',
  },
});
