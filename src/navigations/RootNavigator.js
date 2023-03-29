import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack, AuthStack } from "./StackNavigator";
import { createStackNavigator } from "@react-navigation/stack";

export default function RootNavigator() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Auth" component={AuthStack} />
                <Stack.Screen name="Home" component={HomeStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
