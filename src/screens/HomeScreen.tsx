import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/Button';
import { CustomScreenProps } from '../props/ScreenProps';

const HomeScreen: React.FC<CustomScreenProps> = ({ navigation }) => (
  <View style={styles.container}>
    <Button text="Ir a Usuarios" onClick={() => navigation.navigate('users')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HomeScreen;
