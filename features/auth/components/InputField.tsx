import { View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';

interface InputFieldProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const InputField = ({ label, error, ...rest }: InputFieldProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholderTextColor="#999"
        {...rest}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontWeight: '500',
    marginBottom: 6,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inputError: {
    borderColor: '#FF4D4D',
  },
  errorText: {
    color: '#FF4D4D',
    marginTop: 4,
    fontSize: 13,
  },
});
