import { useCallback, useState } from "react";
import { Center, Text, VStack, HStack, Pressable, IconButton } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { useRecoilValue } from 'recoil'
import Button from "@app/common/components/Button";
import Input from "@app/common/components/Input";
import IAuth from "@app/common/contracts/auth";
import { useAuth } from "@contexts/AuthContext";
import { showFullLoadingState } from "@app/common/helpers/globalState";
import Loading from "@app/common/components/Loading";

const SignIn = () => {
    const { navigate } = useNavigation();
    const { signIn } = useAuth()
    const showFullLoading = useRecoilValue(showFullLoadingState)
    const { control, handleSubmit } = useForm<IAuth.SignIn>();
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

    const fnSumitSignIn = useCallback(async (data: IAuth.SignIn) => {
        await signIn(data)
    }, [])

    return (
        <VStack space={4} w="full" h="full" bg="white" justifyContent="center" p={7} >
            {showFullLoading.value && <Loading />}
            <Center>
                <Text fontFamily="heading" fontSize="3xl" color="black.500" mb={5}>
                    Sign In
                </Text>
            </Center>
            <Controller
                control={control}
                name='email'
                render={({ field: { onChange, onBlur, value }}) => (
                    <Input
                        placeholder="Email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        autoCapitalize='none'
                        autoComplete="email"
                        keyboardType='email-address'
                        value={value}
                        leftElement={
                            <FontAwesome
                                name="envelope-o"
                                size={20}
                                color="gray"
                                style={{ paddingLeft: 16 }}
                            />
                        }
                    />
                )}
            />

            <Controller
                name='password'
                control={control}
                render={({ field: { onBlur, onChange, value }}) => (
                    <Input
                        placeholder="Password"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        autoCapitalize="none"
                        autoComplete="password"
                        value={value}
                        type={visiblePassword ? "text" : "password"}
                        leftElement={
                            <FontAwesome
                                name="lock"
                                size={26}
                                color="gray"
                                style={{ paddingLeft: 16 }}
                            />
                        }
                        rightElement={
                            <IconButton
                                onPress={() => setVisiblePassword(!visiblePassword)}
                            >
                                <FontAwesome
                                    name={visiblePassword ? "eye" : "eye-slash"}
                                    size={20}
                                    color="gray"
                                    style={{ paddingRight: 16 }}
                                />
                            </IconButton>
                        }
                    />
                )}
            />

            <Button title="Sign in" type="primary" onPress={handleSubmit(fnSumitSignIn)} />

            <HStack space={2} justifyContent="center">
                <Text fontFamily="body">Don't have an account yet?</Text>
                <Pressable onPress={() => navigate("signup")}>
                    <Text color="black.500" fontFamily="heading">
                        Sign Up
                    </Text>
                </Pressable>
            </HStack>
        </VStack>
    );
};

export default SignIn;
