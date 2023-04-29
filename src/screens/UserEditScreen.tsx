import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { UserEditScreenProps } from '../props/UserEditScreenProps';
import Constants from 'expo-constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import UserForm from '../components/UserForm';

const UserEditScreen: React.FC<UserEditScreenProps> = ({
  route,
  navigation
}) => {
  const { user } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Ionicons
          name="arrow-back-outline"
          size={32}
          style={styles.icon}
          onPress={() => navigation.goBack()}
        />
        <UserForm user={user} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: Constants.statusBarHeight
  },
  icon: {
    alignSelf: 'flex-start',
    marginBottom: 20
  }
});

export default UserEditScreen;
