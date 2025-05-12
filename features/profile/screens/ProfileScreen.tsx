import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Perfil</Text>

      <Button title="Voltar para Home" onPress={() => router.replace('/home')} />
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
