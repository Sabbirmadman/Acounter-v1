import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function TransectionView({ item, onPress }) {
    return (
        <View style={styles.container}>
            <View style={styles.userIconContainer}>
                <AntDesign name="user" size={24} color="#A1B6DB" />
            </View>
            <TouchableOpacity onPress={onPress} style={styles.innerContainer}>
                <View style={styles.userDetailsContainer}>
                    <Text
                        style={{
                            fontWeight: "bold",
                        }}
                    >
                        {item.title}
                    </Text>
                    <Text
                        style={{
                            color: "#A1B6DB",
                        }}
                    >
                        {item.phone}
                    </Text>
                </View>
                <View style={styles.userTransContainer}>
                    <Text
                        style={{
                            color: "#A1B6DB",
                        }}
                    >
                        {item.lastTrans}
                    </Text>
                    <Text
                        style={{
                            color: item.lastTransAmount > 0 ? "green" : "red",
                        }}
                    >
                        ৳{item.lastTransAmount}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",

        padding: 10,
    },
    innerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    userIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    userDetailsContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    userTransContainer: {
        alignItems: "flex-end",
    },
});
