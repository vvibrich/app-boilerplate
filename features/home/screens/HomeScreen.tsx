import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'expo-router';

export function HomeScreen() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home</Text>

      <Button title="Ir para Perfil" onPress={() => router.push('/profile')} />
      <Button title="Sair" onPress={handleLogout} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
  },
});
