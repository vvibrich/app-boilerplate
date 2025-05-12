import { Slot, useRouter } from 'expo-router';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';

export default function ProtectedLayout() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    }
  }, [user]);

  if (!user) return null;

  return <Slot />;
}
