import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Stack } from './src/navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import UsersScreen from './src/screens/UsersScreen';
import UserEditScreen from './src/screens/UserEditScreen';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="users" component={UsersScreen} />
        <Stack.Screen name="user-edit" component={UserEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
