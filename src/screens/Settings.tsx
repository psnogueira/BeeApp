// src/screens/Settings.tsx
import React from 'react';
import { Box, Text, Switch, VStack, HStack, useColorMode, Center } from 'native-base';

const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // Obtém o modo de cor atual e a função para alternar

  return (
    <Center flex={1} p={4} bg={colorMode === 'dark' ? 'gray.800' : 'white'}>
      <Text fontSize="xl" mb={4} textAlign="center" color="primary.500">
        Configurações
      </Text>
      <VStack space={4} width="90%" alignItems="center"> {/* Centralizando os itens do VStack */}
        <HStack alignItems="center" space={5}> {/* Mantendo o espaço de 20px entre os itens */}
          <Text fontSize="md">Modo Escuro</Text>
          <Switch
            isChecked={colorMode === 'dark'} // Verifica se o modo escuro está ativado
            onToggle={toggleColorMode} // Alterna o modo de cor
          />
        </HStack>
      </VStack>
    </Center>
  );
};

export default Settings;
