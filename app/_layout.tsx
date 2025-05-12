import { Stack } from 'expo-router';
import { AuthProvider } from '@/context/auth-context';
import { ThemeProviderConfig } from '@/context/theme-context';

export default function RootLayout() {
  return (
    <ThemeProviderConfig>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AuthProvider>
    </ThemeProviderConfig>
  );
}
