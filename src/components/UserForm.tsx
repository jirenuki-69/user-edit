import React from 'react';
import { View, StyleSheet } from 'react-native';
import useForm from '../hooks/useForm';
import TextField from './TextField';
import { formFields } from '../constants/constants';

const UserForm: React.FC<UserFormProps> = ({ user }) => {
  const { state, onFieldChange } = useForm({ initialState: user });

  return (
    <View style={styles.container}>
      {formFields.map(({ name, label, placeholder }) => (
        <TextField
          key={name}
          name={name}
          label={label}
          placeholder={placeholder}
          initialState={state[name]}
          onTextChange={onFieldChange}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  }
});

export default UserForm;
