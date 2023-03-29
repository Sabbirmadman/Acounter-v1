import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { AuthContext } from "../Context/AuthContext";
import { demoData } from "../demoData";
import { FlatList } from "react-native";
import TransectionView from "../components/TransectionView";

import { Button } from "react-native";
import DatePicker from "../components/DatePicker";

export default function TransactionList({ navigation }) {
    const [searchTerm, setSearchTerm] = useState("");
    const user = useContext(AuthContext);
    const data = demoData;
    const filteredData = data.filter((item) => item.title.includes(searchTerm));

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <View style={styles.topBarLeft}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Auth")}
                        style={styles.userIconContainer}
                    >
                        <AntDesign
                            style={styles.icon}
                            name="user"
                            size={24}
                            color="black"
                        />
                    </TouchableOpacity>

                    <Text style={styles.userName}>{user.user.username}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Auth")}
                    style={styles.menuIconContainer}
                >
                    <Entypo
                        style={styles.icon}
                        name="menu"
                        size={30}
                        color="#A1B6DB"
                    />
                </TouchableOpacity>
            </View>

            {/* search box  */}
            <View style={searchStyle.searchBox}>
                <TextInput
                    style={searchStyle.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#A1B6DB"
                    onChangeText={(text) => setSearchTerm(text)}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Auth")}
                    style={styles.menuIconContainer}
                >
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={calenderStyle.container}>
                <View>
                    <DatePicker />
                </View>
                <View>
                    <DatePicker />
                </View>
            </View>
            <FlatList
                data={filteredData}
                renderItem={({ item }) => <TransectionView item={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "black",
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    userIconContainer: {
        backgroundColor: "#f2f2f2",
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
    },
    topBarLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    userName: {
        fontSize: 20,
        textTransform: "uppercase",
    },
});
const calenderStyle = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderColor: "#A1B6DB",
        justifyContent: "space-between",
    },
});

const searchStyle = StyleSheet.create({
    searchBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderWidth: 1,
        borderColor: "#A1B6DB",
        margin: 16,
        borderRadius: 50,
    },
    searchInput: {
        fontSize: 16,
        width: "90%",
        color: "#1F3252",
    },
    menuIconContainer: {
        backgroundColor: "#f2f2f2",
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
    },
});
