// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; // Importando Stack Navigator
import Home from '../screens/Home';
import Form from '../screens/Form';
import About from '../screens/About';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
import { useColorModeValue } from 'native-base'; // Importando para uso de cores dinâmicas

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Criando uma instância do Stack Navigator

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1A202C', // Cor do cabeçalho como gray.800 em hexadecimal
        },
        headerTintColor: 'white', // Cor do texto no cabeçalho
        headerTitleAlign: 'center', // Centraliza o título no cabeçalho
      }}
    >
      {/* Define as telas com seus respectivos cabeçalhos */}
      <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contato" component={Form} />
      <Stack.Screen name="Sobre o Projeto" component={About} />
      <Stack.Screen name="Sobre nós" component={Profile} />
      <Stack.Screen name="Configurações" component={Settings} />
    </Stack.Navigator>
  </NavigationContainer>
);

// Definindo o Tab Navigator
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#1A202C', // Cor de fundo como gray.800 em hexadecimal
        borderTopWidth: 0, // Remove a borda superior
      },
      tabBarActiveTintColor: 'white', // Cor do ícone ativo
      tabBarInactiveTintColor: 'lightgray', // Cor do ícone inativo
    }}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Contato" component={Form} />
    <Tab.Screen name="Sobre o Projeto" component={About} />
    <Tab.Screen name="Sobre nós" component={Profile} />
    <Tab.Screen name="Configurações" component={Settings} />
  </Tab.Navigator>
);

export default AppNavigator;
