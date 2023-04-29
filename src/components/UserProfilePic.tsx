import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

const UserProfilePic = () => (
  <Avatar.Image
    size={80}
    style={styles.pic}
    source={require('../../assets/user.png')}
  />
);

const styles = StyleSheet.create({
  pic: {
    position: 'absolute',
    zIndex: 1,
    top: -50,
    left: 20
  }
});

export default UserProfilePic;
