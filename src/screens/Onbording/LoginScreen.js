import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function LoginScreen({ navigation }) {
    const user = useContext(AuthContext);
    return (
        <SafeAreaView style={styles.container}>
            <Text>LoginScreen</Text>
            <Button
                title="Go to Register"
                onPress={() => navigation.navigate("Register")}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
