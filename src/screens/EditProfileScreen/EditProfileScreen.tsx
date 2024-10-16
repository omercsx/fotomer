import React, { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

import { useForm } from 'react-hook-form';
import { launchImageLibrary, type Asset } from 'react-native-image-picker';

import CustomInput from './CustomInput';
import { IEditableUser } from './CustomInput';
import user from '../../assets/data/user.json';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const EditProfileScreen = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Asset | null>(null);

  const { control, handleSubmit } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: (user as any).website ?? '',
      bio: user.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.log(data);
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      { mediaType: 'photo' },
      ({ didCancel, errorCode, assets }) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Image
        source={{ uri: selectedPhoto?.uri || user.image }}
        style={styles.avatar}
      />
      <Button title="Change profile photo" onPress={onChangePhoto} />
      <CustomInput
        label="Name"
        control={control}
        name="name"
        rules={{ required: 'required' }}
      />
      <CustomInput
        label="Username"
        control={control}
        name="username"
        rules={{
          required: 'required',
          minLength: {
            value: 3,
            message: 'Username must be at least 3 characters',
          },
        }}
      />
      <CustomInput
        label="Website"
        control={control}
        name="website"
        rules={{
          pattern: {
            value: URL_REGEX,
            message: 'Please enter a valid URL',
          },
        }}
      />
      <CustomInput label="Bio" control={control} name="bio" multiline />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
});
