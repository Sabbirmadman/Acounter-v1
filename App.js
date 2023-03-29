import { StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./src/Context/AuthContext";
import RootNavigator from "./src/navigations/RootNavigator";

export default function App() {
    return (
        <AuthProvider>
            <RootNavigator />
        </AuthProvider>
    );
}
