import { useState } from 'react';

type FieldResult = {
  value: string;
  onChangeText: (value: string) => void;
};

type Props = {
  initialState: string;
};

const useField = ({ initialState }: Props): FieldResult => {
  const [value, setValue] = useState(initialState || '');

  const onChangeText = (value: string) => {
    setValue(value);
  };

  return {
    value,
    onChangeText
  };
};

export default useField;
