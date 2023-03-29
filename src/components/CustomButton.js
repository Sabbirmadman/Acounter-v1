import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function CustomButton({
    title,
    icon,
    onPress,
    buttonStyle,
    textStyle,
    IconToDisplay,
}) {
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...buttonStyle,
            }}
        >
            <Entypo
                style={styles.icon}
                name="circle-with-plus"
                size={24}
                color="black"
            />
            <Text
                style={{
                    ...styles.buttonText,
                    ...textStyle,
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#41FF8B",
        height: 50,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    icon: {
        marginRight: 10,
        color: "white",
    },
});
