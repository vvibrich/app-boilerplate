import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export const ForgotPasswordForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSendReset = () => {
    // Simula envio de e-mail
    console.log('Enviando recuperação para:', email);
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha 🔐</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleSendReset}>
        <Text style={styles.buttonText}>Enviar Link</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 24, flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 24, textAlign: 'center' },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 12, marginBottom: 12, fontSize: 16,
  },
  button: {
    backgroundColor: '#111', padding: 16, borderRadius: 8,
    alignItems: 'center', marginTop: 8,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
