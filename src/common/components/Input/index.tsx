import { Input as NativeBaseInput, IInputProps } from 'native-base';

export default function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.500"
      h={16}
      px={4}
      borderColor="gray.500"
      fontSize="md"
      borderRadius='lg'
      fontFamily="body"
      placeholderTextColor="gray.600"
      _focus={{ bg: "gray.500", borderColor: "gray.500"  }}
      {...rest}
    />
  );
}
