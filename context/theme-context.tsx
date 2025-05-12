import { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { darkTheme, lightTheme } from '@/theme/theme';

type ThemeType = 'light' | 'dark';

interface ThemeContextProps {
  theme: typeof lightTheme;
  mode: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProviderConfig = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeConfig = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeConfig must be used within ThemeProviderConfig');
  return context;
};
