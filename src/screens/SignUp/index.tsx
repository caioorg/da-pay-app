import { useState } from 'react'
import { Center, Text, VStack, HStack, Pressable, IconButton } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import Button from '@components/Button'
import Input from '@components/Input'
import Illustration from '@assets/sign-up.svg'

const SignUp = () => {
  const { navigate } = useNavigation()
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false)

  return (
    <VStack flex={1} p={0}>
      <Illustration />
      <Center>
        <Text fontFamily='heading' fontSize='3xl' color='black.500' mb={5}>Sign Up</Text>
      </Center>

      <VStack space={4} w='full' mb={4} p={7}>
        <Input placeholder='Full Name' leftElement={<FontAwesome name="user-o" size={20} color="gray" style={{ paddingLeft: 16 }} />} />
        <Input placeholder='Email' leftElement={<FontAwesome name="envelope-o" size={20} color="gray" style={{ paddingLeft: 16 }} />} />
        <Input
          placeholder='Password'
          type={visiblePassword ? 'text' : 'password'}
          leftElement={<FontAwesome name="lock" size={26} color="gray" style={{ paddingLeft: 16 }} />}
          rightElement={
            <IconButton onPress={() => setVisiblePassword(!visiblePassword)}>
              <FontAwesome name={visiblePassword ? 'eye' : 'eye-slash'} size={20} color="gray" style={{ paddingRight: 16 }} />
            </IconButton>
          }
        />

        <Button title='Sign up' type='secondary' />

        <HStack space={2} justifyContent='center'>
          <Text fontFamily='body'>Alrealy Have An Account?</Text>
          <Pressable onPress={() => navigate('signin')}>
            <Text color="black.500" fontFamily='heading'>Log in</Text>
          </Pressable>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default SignUp
