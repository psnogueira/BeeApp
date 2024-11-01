// src/components/ButtonComponent.tsx
import React from 'react';
import { Button } from 'native-base';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ title, onPress }) => (
  <Button onPress={onPress} w="100%" mt="2">
    {title}
  </Button>
);

export default ButtonComponent;
