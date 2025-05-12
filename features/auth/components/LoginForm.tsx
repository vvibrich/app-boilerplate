import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useLogin } from '../hooks/useLogin';
import { AuthHeader } from './AuthHeader';
import { SocialLoginButtons } from './SocialLoginButtons';
import { InputField } from './InputField';
import { ThemeToggleButton } from '@/shared/components/ThemeToggleButton';
import { AuthLayout } from '../layouts/AuthLayout';
import { useThemeConfig } from '@/context/theme-context';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, isLoading } = useLogin();
  const router = useRouter();
  const { theme } = useThemeConfig();

  return (
    <AuthLayout>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <AuthHeader
          title="Entrar"
          subtitle="Acesse sua conta para continuar usando nossos serviços."
        />

        <SocialLoginButtons />

        <Text style={[styles.or, { color: theme.text }]}>ou</Text>

        <InputField
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <InputField
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity onPress={() => router.push('/forgot-password')}>
          <Text style={[styles.link, { color: theme.primary }]}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.loginButton, { backgroundColor: theme.primary }]}
          onPress={() => handleLogin(email, password)}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Entrar</Text>
          )}
        </TouchableOpacity>

        <Text style={[styles.footer, { color: theme.text }]}>
          Não tem conta?{' '}
          <Text
            style={[styles.footerLink, { color: theme.primary }]}
            onPress={() => router.push('/register')}
          >
            Criar uma
          </Text>
        </Text>

        <View style={styles.themeToggle}>
            <ThemeToggleButton />
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    borderRadius: 12,
  },
  or: {
    textAlign: 'center',
    marginVertical: 12,
  },
  link: {
    alignSelf: 'flex-end',
    marginBottom: 16,
    fontSize: 14,
  },
  loginButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  footer: {
    textAlign: 'center',
    fontSize: 14,
  },
  footerLink: {
    fontWeight: '600',
  },
  themeToggle: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 10,
  },
});
