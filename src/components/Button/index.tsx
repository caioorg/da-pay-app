import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

interface Props extends IButtonProps {
  title: string,
  type?: 'primary' | 'secondary'
}

const Button = ({ title, type = 'primary', ...rest }: Props) => {
  const BG_COLOR = { primary: 'green.500', secondary: 'yellow.500' }
  const PRESS_COLOR = { primary: 'green.600', secondary: 'yellow.400' }
  const COLOR = { primary: 'white', secondary: 'black.500' }

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
