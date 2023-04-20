import { Box, Spinner } from "native-base";

const Loading = () => (
    <Box
        position="absolute"
        flex={1}
        alignItems="center"
        justifyContent="center"
        top="0"
        bottom="0"
        left="0"
        right="0"
        zIndex="10"
        background="rgba(0,0,0,0.3)"
    >
        <Spinner color="blue.500" size="lg" />
    </Box>
);

export default Loading;
