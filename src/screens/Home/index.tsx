import { View, Text } from "react-native";
import Button from "@app/common/components/Button";
import React from "react";
import { useAuth } from "@contexts/AuthContext";

const Home = () => {
    const { logout } = useAuth();
    return (
        <View>
            <Text>Home</Text>
            <Button title="Deslogar" onPress={() => logout()} />
        </View>
    );
};

export default Home;
