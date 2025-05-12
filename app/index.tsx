import { useEffect } from 'react';
import { useRouter, useRootNavigationState } from 'expo-router';
import { useAuth } from '@/context/auth-context';

export default function Index() {
  const { user } = useAuth();
  const router = useRouter();
  const rootNavigationState = useRootNavigationState();

  useEffect(() => {
    if (!rootNavigationState?.key) {
      // Ainda não montou a árvore de navegação
      return;
    }

    if (user) {
      router.replace('/home');
    } else {
      router.replace('/login');
    }
  }, [user, rootNavigationState]);

  return null;
}
