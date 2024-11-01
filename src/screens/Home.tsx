// src/screens/Home.tsx
import React from 'react';
import { Box, Text, Center, useColorMode } from 'native-base';

const Home = () => {
  const { colorMode } = useColorMode(); // Obtém o modo de cor atual

  return (
    <Box flex={1} bg={colorMode === 'dark' ? 'gray.800' : 'primary.50'} p={4}>
      <Center flexDirection="column" alignItems="center" justifyContent="flex-start"> {/* Centraliza horizontalmente e alinha ao topo */}
        <Text fontSize="3xl" fontWeight="bold" color={colorMode === 'dark' ? 'white' : 'primary.500'}>
          Bem-vindo ao BeeApp!
        </Text>
        <Text fontSize="xl" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mt={2}>
          Este é o aplicativo inicial para explorar suas funcionalidades.
        </Text>
      </Center>

      {/* Adicionando informações sobre o projeto Bee */}
      <Box 
        mt={100} 
        p={4} 
        mx={60} // Distância de 80px de cada lado
        maxW="1000px" // Largura máxima de 1000px
        borderWidth={1} 
        borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'} 
        borderRadius="md" 
        alignSelf="center" // Centraliza a Box horizontalmente
      >
        <Text fontSize="lg" fontWeight="bold" color={colorMode === 'dark' ? 'white' : 'primary.500'}>
          Sobre o Projeto Bee
        </Text>
        <Text fontSize="xl" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mt={2} textAlign="center">
          "Bee" é uma solução de análise de dados desenvolvida para facilitar o acesso e visualização de informações empresariais através de uma aplicação web.
        </Text>
        <Text fontSize="xl" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mt={2} textAlign="center">
          Este projeto utiliza:
        </Text>
        <Text fontSize="xl" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mt={1} textAlign="center">
          - ASP.NET Core
        </Text>
        <Text fontSize="xl" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mt={1} textAlign="center">
          - SQL Server
        </Text>
        <Text fontSize="xl" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mt={1} textAlign="center">
          - Power BI
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
