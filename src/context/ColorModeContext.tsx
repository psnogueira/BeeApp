// src/context/ColorModeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definindo o contexto
interface ColorModeContextType {
  colorMode: 'light' | 'dark';
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined);

// Provedor do contexto
interface ColorModeProviderProps {
  children: ReactNode; // Define o tipo de children como ReactNode
}

export const ColorModeProvider: React.FC<ColorModeProviderProps> = ({ children }) => {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');

  const toggleColorMode = () => {
    setColorMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

// Hook para usar o contexto
export const useColorModeContext = () => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error('useColorModeContext must be used within a ColorModeProvider');
  }
  return context;
};
