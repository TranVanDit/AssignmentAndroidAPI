import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ChatTab = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Lab03')}>Go to Lab03</Text>
      <Text onPress={() => navigation.navigate('Lab04')}>Go to Lab04</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default ChatTab;
