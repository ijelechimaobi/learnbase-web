import { Button } from '@chakra-ui/react';
import React from 'react';

export default function SolidButton({
  title = '',
  onClick = () => {},
  m = '',
  d = 'flex',
  icon = false,
  color = 'telegram',
  size = 'sm',
  rounded = 'md',
  wide = false,
  loading = false,
}) {
  return (
    <Button
      w={wide && '100%'}
      m={m}
      d={d}
      size={size}
      rounded={rounded}
      variant="solid"
      colorScheme={color}
      onClick={onClick}
      leftIcon={icon && icon}
      isLoading={loading}
    >
      {title}
    </Button>
  );
}
