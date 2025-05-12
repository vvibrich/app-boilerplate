import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useThemeConfig } from '@/context/theme-context';

export const ThemeToggleButton = () => {
  const { toggleTheme, mode } = useThemeConfig();

  const icon = mode === 'light' ? '🌙' : '☀️';

  return (
    <TouchableOpacity style={styles.button} onPress={toggleTheme}>
      <Text style={styles.icon}>{icon}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: '#e5e7eb', // cinza claro para ambos os temas (pode adaptar com theme.card se quiser)
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
  },
});
