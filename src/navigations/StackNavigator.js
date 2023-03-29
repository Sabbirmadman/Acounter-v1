import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Homepage from "../screens/Home/HomePage";
import LandingScreen from "../screens/Onbording/LandingScreen";
import LoginScreen from "../screens/Onbording/LoginScreen";
import RegisterScreen from "../screens/Onbording/RegisterScreen";

const Auth = createStackNavigator();
const Home = createStackNavigator();

export function AuthStack() {
    return (
        <Auth.Navigator initialRouteName="Login">
            <Auth.Screen
                name="Welcome"
                component={LandingScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Auth.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Auth.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Auth.Navigator>
    );
}

export function HomeStack() {
    return (
        <Home.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="HomeScreen"
        >
            <Home.Screen name="HomeScreen" component={Homepage} />
        </Home.Navigator>
    );
}
