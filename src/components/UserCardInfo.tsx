import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const UserCardInfo: React.FC<UserCardInfoProps> = ({ title, content }) => {
  return (
    <View style={{ flexDirection: 'column' }}>
      <Text variant="titleSmall" style={{ fontWeight: '500' }}>
        {title}
      </Text>
      <Text variant="bodyMedium">{content}</Text>
    </View>
  );
};

export default UserCardInfo;
