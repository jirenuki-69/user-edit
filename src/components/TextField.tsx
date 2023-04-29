import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import useField from '../hooks/useField';

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  placeholder,
  initialState,
  onTextChange
}) => {
  const { value, onChangeText } = useField({ initialState });

  const handleChangeText = (value: string) => {
    onChangeText(value);
    onTextChange(name, value);
  };

  return (
    <TextInput
      label={label}
      mode="outlined"
      onChangeText={handleChangeText}
      placeholder={placeholder}
      style={styles.input}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 10
  }
});

export default TextField;
