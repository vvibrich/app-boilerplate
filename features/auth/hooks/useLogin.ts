import { useAuth } from '@/context/auth-context';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export function useLogin() {
  const { login } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      // Simula delay de autenticação
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Aqui você faria a autenticação real com Firebase, Supabase, etc.
      login(email); // Usa email como ID temporariamente

      router.replace('/home');
    } catch (err) {
      console.error('Erro no login', err);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleLogin, isLoading };
}
