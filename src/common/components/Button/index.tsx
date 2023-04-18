import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

interface Props extends IButtonProps {
  title: string,
  type?: 'primary' | 'secondary'
}

const Button = ({ title, type = 'primary', ...rest }: Props) => {
  const BG_COLOR = { primary: 'blue.500', secondary: 'pink.500' }
  const PRESS_COLOR = { primary: 'blue.600', secondary: 'pink.600' }
  const COLOR = { primary: 'white', secondary: 'white' }

  return (
    <ButtonNativeBase
      w='full'
      h='14'
      rounded='lg'
      fontSize='md'
      bg={BG_COLOR[type]}
      color={COLOR[type]}
       _pressed={{ bg: PRESS_COLOR[type] }}
      _loading={{ _spinner: { color: "black" } }}
      {...rest}
    >
      <Text fontSize='sm' textTransform='uppercase' fontFamily='medium' color={COLOR[type]}>
        {title}
      </Text>
    </ButtonNativeBase>
  )
}

export default Button
