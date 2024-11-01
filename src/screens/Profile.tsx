// src/screens/Profile.tsx
import React, { useEffect, useState } from 'react';
import { Box, Avatar, VStack, Text, Center, useColorMode, ScrollView, HStack } from 'native-base';

// Define a interface para o perfil do GitHub
interface GitHubProfile {
  avatar_url: string;
  name: string | null; // Pode ser nulo se não houver nome
  login: string; // O nome de usuário do GitHub
  email?: string; // O email pode não estar disponível
  bio?: string; // A bio pode não estar disponível
}

// Array de usuários que queremos buscar
const developers = [
  { username: 'psnogueira' },
  { username: 'Laurazoia22' },
  { username: 'Gabs-Moura' },
  { username: 'HeitorMancin' },
];

// Dados padrão para usuários não encontrados
const defaultProfile: GitHubProfile = {
  avatar_url: 'https://via.placeholder.com/150', // Imagem padrão
  name: 'Usuário Não Encontrado',
  login: 'Usuário',
  email: 'Email não disponível',
  bio: 'Sem descrição disponível.',
};

const Profile = () => {
  const { colorMode } = useColorMode();
  const [profiles, setProfiles] = useState<GitHubProfile[]>([]); // Define o estado como um array de GitHubProfile

  // Função para buscar os dados do usuário do GitHub
  const fetchGitHubProfile = async (username: string): Promise<GitHubProfile> => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        // Se a resposta não for ok, retorna os dados padrão
        return defaultProfile;
      }
      const data = await response.json();
      return {
        avatar_url: data.avatar_url || defaultProfile.avatar_url,
        name: data.name || defaultProfile.name,
        login: data.login,
        email: data.email || defaultProfile.email,
        bio: data.bio || defaultProfile.bio,
      };
    } catch (error) {
      console.error(error);
      return defaultProfile; // Retorna os dados padrão em caso de erro
    }
  };

  // Chama a função fetch quando o componente é montado
  useEffect(() => {
    const fetchAllProfiles = async () => {
      const profilePromises = developers.map(dev => fetchGitHubProfile(dev.username)); // Mapeia os usuários e busca os dados
      const profilesData = await Promise.all(profilePromises); // Aguarda a resolução de todas as promessas
      setProfiles(profilesData); // Atualiza o estado com os perfis, que podem incluir dados padrão
    };

    fetchAllProfiles(); // Chama a função para buscar os perfis
  }, []);

  return (
    <ScrollView
      flex={1}
      bg={colorMode === 'dark' ? 'gray.800' : 'primary.50'}
      p={4}
    >
      {/* Título acima dos blocos de informação */}
      <Center mb={4}>
        <Text fontSize="2xl" fontWeight="bold" color={colorMode === 'dark' ? 'white' : 'primary.500'}>
          Integrantes do Projeto
        </Text>
      </Center>
      <HStack
        space={4}
        flexWrap="wrap" // Permite que os itens se movam para a linha seguinte
        justifyContent="center" // Centraliza os itens horizontalmente
      >
        {profiles.map((profile, index) => (
          <Center key={index} w="300px" mb={4}> {/* Define largura fixa de 300px */}
            <Avatar
              size="2xl"
              source={{
                uri: profile.avatar_url || 'https://via.placeholder.com/150', // Imagem padrão se a URL não estiver disponível
              }}
            />
            <VStack space={2} mt={4} alignItems="center">
              <Text fontSize="xl" color={colorMode === 'dark' ? 'white' : 'primary.500'}>
                {profile.name || profile.login} {/* Exibe o nome ou login */}
              </Text>
              <Text fontSize="md" color={colorMode === 'dark' ? 'gray.300' : 'gray.500'}>
                {profile.bio || 'Sem descrição disponível.'}
              </Text>
            </VStack>
          </Center>
        ))}
      </HStack>
    </ScrollView>
  );
};

export default Profile;
