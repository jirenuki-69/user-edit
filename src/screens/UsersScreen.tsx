import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import useUsersScreen from '../hooks/useUsersScreen';
import UserCard from '../components/UserCard';
import { ScrollView } from 'react-native-gesture-handler';
import { CustomScreenProps } from '../props/ScreenProps';

const UsersScreen: React.FC<CustomScreenProps> = ({ navigation }) => {
  const { users, loading } = useUsersScreen();

  return (
    <ScrollView>
      <View style={styles.container}>
        {!loading ? (
          users.map((user) => (
            <UserCard key={user.email} user={user} navigation={navigation} />
          ))
        ) : (
          <ActivityIndicator color="black" />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: Constants.statusBarHeight + 60
  }
});

export default UsersScreen;
