// src/screens/Form.tsx
import React, { useState } from 'react';
import { Button, Input, TextArea, FormControl, VStack, Text, Box, useColorMode, Modal } from 'native-base';

const Form = () => {
  const { colorMode } = useColorMode(); // Obtém o modo de cor atual
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // Estado para a mensagem
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal
  const [successMessage, setSuccessMessage] = useState(''); // Estado para a mensagem de sucesso

  const validateForm = () => {
    if (!name || !email || !message) { // Validação para todos os campos
      setError('Todos os campos são obrigatórios');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsModalOpen(true); // Abre o modal de confirmação
    }
  };

  const handleConfirm = () => {
    // Ação após a confirmação, como envio para API
    console.log({ name, email, message }); // Para fins de demonstração
    setIsModalOpen(false); // Fecha o modal após confirmar
    setSuccessMessage('Mensagem enviada com sucesso!'); // Define a mensagem de sucesso
    // Limpa os campos do formulário
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Fecha o modal se o usuário cancelar
  };

  return (
    <Box p="4" mx="60px" bg={colorMode === 'dark' ? 'gray.800' : 'white'}>
      <VStack space={4}>
        <FormControl isRequired isInvalid={!!error}>
          <FormControl.Label>
            <Text color={colorMode === 'dark' ? 'white' : 'black'}>Nome</Text>
          </FormControl.Label>
          <Input
            placeholder="Digite seu nome"
            value={name}
            onChangeText={text => setName(text)}
            bg={colorMode === 'dark' ? 'gray.700' : 'white'}
            borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
            color={colorMode === 'dark' ? 'white' : 'black'}
          />
        </FormControl>
        <FormControl isRequired isInvalid={!!error}>
          <FormControl.Label>
            <Text color={colorMode === 'dark' ? 'white' : 'black'}>Email</Text>
          </FormControl.Label>
          <Input
            placeholder="Digite seu email"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            bg={colorMode === 'dark' ? 'gray.700' : 'white'}
            borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
            color={colorMode === 'dark' ? 'white' : 'black'}
          />
        </FormControl>
        <FormControl isRequired isInvalid={!!error}>
          <FormControl.Label>
            <Text color={colorMode === 'dark' ? 'white' : 'black'}>Mensagem</Text>
          </FormControl.Label>
          <TextArea
            placeholder="Digite sua mensagem"
            value={message}
            onChangeText={text => setMessage(text)}
            autoCompleteType="off"
            bg={colorMode === 'dark' ? 'gray.700' : 'white'}
            borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
            color={colorMode === 'dark' ? 'white' : 'black'}
            h={20}
          />
        </FormControl>
        {error ? <Text color="red.500">{error}</Text> : null}
        {successMessage ? <Text color="green.500">{successMessage}</Text> : null} {/* Mensagem de sucesso */}
        <Button onPress={handleSubmit} bg={colorMode === 'dark' ? 'primary.500' : 'primary.600'}>
          <Text color="white">Enviar</Text>
        </Button>
      </VStack>

      {/* Modal de confirmação */}
      <Modal isOpen={isModalOpen} onClose={handleCancel}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Confirmar Envio</Modal.Header>
          <Modal.Body>
            <Text>Você deseja enviar o formulário?</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={handleCancel} colorScheme="gray">
                Cancelar
              </Button>
              <Button onPress={handleConfirm} colorScheme="blue">
                Confirmar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default Form;
