// App.tsx
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import AppNavigator from './src/navigation/AppNavigator';
import theme from './src/theme';
import { ColorModeProvider } from './src/context/ColorModeContext'; // Importe o provedor

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <ColorModeProvider> {/* Envolva o aplicativo com o provedor */}
        <AppNavigator />
      </ColorModeProvider>
    </NativeBaseProvider>
  );
}
