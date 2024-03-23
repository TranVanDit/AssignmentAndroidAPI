import React, { useState } from 'react';
import { View, Button, Image, Text } from 'react-native';
import  { launchCamera } from 'react-native-image-picker';

const Lab04Screen = () => {
  const [avatar, setAvatar] = useState(null);

  const options = {
    title: 'Chọn ảnh',
    mediaType: 'photo', // Chỉ chụp ảnh, không quay video
    cameraType: 'front', // Sử dụng camera trước
  };

  const captureImage = () => {
    launchCamera(options, (response) => {
      console.log(response);
      if (response.didCancel) {
        console.log('Người dùng đã hủy bỏ chụp ảnh');
      } else if (response.errorMessage) {
        console.log('Lỗi khi chụp ảnh:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        // Lấy URI của ảnh từ mảng assets
        const uri = response.assets[0].uri;
        // Hiển thị ảnh đã chụp bằng cách cập nhật state
        uri && setAvatar(uri);
      }
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {avatar ? (
        <Image source={{ uri: avatar }} style={{ width: 200, height: 200, marginBottom: 20 }} />
      ) : (
        <Text>Ấn vào nút để chụp ảnh</Text>
      )}
      <Button title="Chụp ảnh" onPress={captureImage} />
    </View>
  );
};

export default Lab04Screen;
