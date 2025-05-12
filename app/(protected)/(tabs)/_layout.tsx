import { Tabs } from 'expo-router';
import { useThemeConfig } from '@/context/theme-context';
import { Home, User } from 'lucide-react-native';

export default function ProtectedTabsLayout() {
  const { theme, mode } = useThemeConfig();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: mode === 'light'? theme.primary :  theme.card,
          borderTopColor: theme.border,
          height: 70,
          width: '95%',
        //   alignSelf: 'center',
          borderRadius: 25,
          bottom: 25,
          marginLeft: 10,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: mode === 'light' ? theme.card : theme.primary,
        tabBarInactiveTintColor: mode === 'light' ? '#AEAEAE' : '#aaaaaa',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
