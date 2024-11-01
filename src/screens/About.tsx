// src/screens/About.tsx
import React from 'react';
import { Box, Text, Center, useColorMode, ScrollView } from 'native-base';

const About = () => {
  const { colorMode } = useColorMode(); // Obtém o modo de cor atual

  return (
    <Center flex={1} bg={colorMode === 'dark' ? 'gray.800' : 'primary.50'} p={4}>
      <ScrollView pl={10}> {/* Adiciona 10px de padding à esquerda (2.5 unidades em NativeBase) */}
        <Text fontSize="2xl" color={colorMode === 'dark' ? 'purple.600' : 'primary.500'} mb={4}> {/* Alterado para roxo no modo escuro */}
          Sobre Nós
        </Text>
        
        <Text fontSize="md" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mb={2}>
          Bee é uma solução de análise de dados desenvolvida para facilitar o acesso e visualização de informações empresariais através de uma aplicação web.
        </Text>

        <Text fontSize="lg" color={colorMode === 'dark' ? 'purple.600' : 'primary.500'} mt={4} mb={2}> {/* Alterado para roxo no modo escuro */}
          Este projeto utiliza:
        </Text>
        <Text fontSize="md" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mb={2}>
          - ASP.NET Core
        </Text>
        <Text fontSize="md" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mb={2}>
          - SQL Server
        </Text>
        <Text fontSize="md" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mb={4}>
          - Power BI
        </Text>

        <Text fontSize="lg" color={colorMode === 'dark' ? 'purple.600' : 'primary.500'} mt={4} mb={2}> {/* Alterado para roxo no modo escuro */}
          Descrição Geral
        </Text>
        <Text fontSize="md" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mb={4}>
          O projeto Bee é uma aplicação web desenvolvida em C# utilizando a arquitetura MVC do ASP.NET Core. Ele permite que os usuários façam consultas e manipulem dados armazenados em um banco de dados SQL Server de maneira eficiente. Além disso, a aplicação utiliza Power BI para incorporar relatórios diretamente na interface, oferecendo visualizações dinâmicas e interativas.
        </Text>

        <Text fontSize="lg" color={colorMode === 'dark' ? 'purple.600' : 'primary.500'} mt={4} mb={2}> {/* Alterado para roxo no modo escuro */}
          Tecnologias Principais
        </Text>
        
        <Text fontSize="md" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mb={2}>
          <strong>Linguagem de Programação:</strong> C#: A linguagem principal utilizada no desenvolvimento da aplicação.
        </Text>
        <Text fontSize="md" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mb={2}>
          <strong>Banco de Dados:</strong> SQL: Usada para manipulação e consulta dos dados dentro do banco de dados. O banco de dados é gerenciado por SQL Server, e administrado através do SQL Server Management Studio (SSMS) 20.
        </Text>
        <Text fontSize="md" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mb={2}>
          <strong>Autenticação e Autorização:</strong> Identity: Implementado para o gerenciamento de autenticação e autorização de usuários.
        </Text>
        <Text fontSize="md" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mb={4}>
          <strong>Integração com Power BI:</strong> Power BI: Utilizado para incorporar relatórios do Power BI diretamente na aplicação web. Isso permite que os usuários visualizem gráficos e relatórios interativos dentro da plataforma, sem necessidade de sair da aplicação.
        </Text>

        <Text fontSize="lg" color={colorMode === 'dark' ? 'purple.600' : 'primary.500'} mt={4} mb={2}> {/* Alterado para roxo no modo escuro */}
          Estrutura da Aplicação
        </Text>
        <Text fontSize="md" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mb={2}>
          A aplicação segue o padrão Model-View-Controller (MVC), garantindo uma separação clara entre as responsabilidades de apresentação, lógica de negócios e manipulação de dados.
        </Text>
        <Text fontSize="md" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mb={2}>
          <strong>Model:</strong> Representa as classes que lidam com a manipulação de dados e a lógica de negócios.
        </Text>
        <Text fontSize="md" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mb={2}>
          <strong>View:</strong> Responsável pela apresentação dos dados e pela interação do usuário com o sistema.
        </Text>
        <Text fontSize="md" color={colorMode === 'dark' ? 'gray.300' : 'gray.700'} mb={4}>
          <strong>Controller:</strong> Atua como o intermediário entre o Model e o View, processando as requisições dos usuários e retornando as respostas apropriadas.
        </Text>
      </ScrollView>
    </Center>
  );
};

export default About;
