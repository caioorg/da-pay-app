import { Center, Spinner } from 'native-base'

const Loading = () => (
  <Center flex={1} bgColor='white'>
    <Spinner color='green.500'  />
  </Center>
)

export default Loading
