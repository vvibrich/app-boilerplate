import { View, Text, Image, StyleSheet } from 'react-native';
import { useThemeConfig } from '@/context/theme-context'

export const AuthHeader = ({ title, subtitle }: { title: string; subtitle: string }) => {
    const { theme } = useThemeConfig();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3788/3788061.png' }}
        style={styles.emoji}
      />
      <Text style={[styles.title, { color: theme.text } ]}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 24,
  },
  emoji: {
    width: 48,
    height: 48,
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginTop: 4,
  },
});
