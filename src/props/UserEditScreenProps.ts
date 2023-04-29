import { RouteProp } from '@react-navigation/native';
import { NavigationScreenProp } from 'react-navigation';

export type UserEditScreenProps = {
  route: RouteProp<{ params: { user: User } }>;
  navigation: NavigationScreenProp<any, any>;
};
