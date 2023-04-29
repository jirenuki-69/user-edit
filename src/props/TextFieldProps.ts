type TextFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  initialState: string;
  onTextChange: (field: string, value: string) => void;
};
