import React from 'react';
import CustomButton from '../CustomButton';
import {signInWithRedirect} from 'aws-amplify/auth';

const SocialSignInButtons = () => {
  const onSignInFacebook = async () => {
    try {
      await signInWithRedirect({provider: 'Facebook'});
    } catch (error) {
      console.log(error);
    }
  };

  const onSignInGoogle = async () => {
    try {
      await signInWithRedirect({provider: 'Google'});
    } catch (error) {
      console.log(error);
    }
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
