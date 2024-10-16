import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  Camera,
  CameraView,
  type CameraPictureOptions,
  type CameraRecordingOptions,
  type CameraType,
} from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PostUploadScreen = () => {
  const [facing, setFacing] = useState<CameraType>('back');
  const [flash, setFlash] = useState<'on' | 'off'>('off');
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const cameraRef = useRef<CameraView>(null);

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(
        cameraPermission.status === 'granted' &&
          microphonePermission.status === 'granted',
      );
    };
    getPermission();
  }, []);

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const toggleFlash = () => {
    setFlash(current => (current === 'on' ? 'off' : 'on'));
  };

  const startRecording = async () => {
    if (!isCameraReady || isRecording || !cameraRef.current) {
      return;
    }

    const options: CameraRecordingOptions = {
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024, // 10 MB
    };

    try {
      setIsRecording(true);
      const result = await cameraRef.current.recordAsync(options);
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (isRecording) {
      cameraRef.current?.stopRecording();
      setIsRecording(false);
    }
  };

  const takePicture = async () => {
    if (isCameraReady) {
      const options: CameraPictureOptions = {
        quality: 1,
        base64: false, // for backend, we can use base64
        skipProcessing: true, // on android, we need to skip processing because it takes too long
      };

      const photo = await cameraRef.current?.takePictureAsync(options);
      console.log(photo);
    }
  };

  if (hasPermission === null) {
    return (
      <View style={styles.page}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.page}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <CameraView
        style={styles.camera}
        ref={cameraRef}
        facing={facing}
        flash={flash}
        onCameraReady={() => setIsCameraReady(true)}>
        <View style={[styles.buttonsContainer, { top: 5 }]}>
          <TouchableOpacity>
            <MaterialIcons name="close" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleFlash}>
            <MaterialIcons
              name={flash === 'on' ? 'flash-on' : 'flash-off'}
              size={30}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="settings" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={[styles.buttonsContainer, { bottom: 5 }]}>
          <TouchableOpacity>
            <MaterialIcons name="photo-library" size={30} color="white" />
          </TouchableOpacity>
          {isCameraReady && (
            <TouchableOpacity
              onPress={takePicture}
              onLongPress={startRecording}
              onPressOut={stopRecording}>
              <View style={[styles.circle, isRecording && styles.recording]} />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={toggleCameraFacing}>
            <MaterialIcons name="flip-camera-ios" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

export default PostUploadScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },

  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    backgroundColor: 'white',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
  },

  recording: {
    backgroundColor: 'red',
  },
});
