import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../Context/AuthContext";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { demoData } from "../../demoData";
import { LineChart } from "react-native-chart-kit";
import CustomButton from "../../components/CustomButton";
import TransectionView from "../../components/TransectionView";
export default function HomePage({ navigation }) {
    const user = useContext(AuthContext);
    const limitData = demoData.slice(0, 5);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* top bar */}
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

                        <Text style={styles.userName}>
                            {user.user.username}
                        </Text>
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

                <View style={graphStyle.graphContainer}>
                    <View style={graphStyle.GraphDesc}>
                        <View style={graphStyle.GraphDescItem}>
                            <View
                                style={{
                                    ...graphStyle.GraphDescItemColor,
                                    backgroundColor: "#41FF8B",
                                }}
                            ></View>
                            <Text style={graphStyle.GraphDescItemText}>
                                Income
                            </Text>
                        </View>
                        <View style={graphStyle.GraphDescItem}>
                            <View
                                style={{
                                    ...graphStyle.GraphDescItemColor,
                                    backgroundColor: "#FF5984",
                                }}
                            ></View>
                            <Text style={graphStyle.GraphDescItemText}>
                                Expense
                            </Text>
                        </View>
                    </View>

                    <LineChart
                        data={{
                            labels: [
                                "Sun",
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                            ],
                            datasets: [
                                {
                                    strokeWidth: 5,
                                    data: [10, 20, 30, 20, 50],
                                    color: (opacity = 1) =>
                                        `rgba(65, 255, 139, ${opacity})`, // red
                                },
                                {
                                    strokeWidth: 5,
                                    data: [20, 30, 10, 25, 35],
                                    color: (opacity = 1) =>
                                        `rgba(255, 89, 132, ${opacity})`, // green
                                },
                            ],
                        }}
                        width={Dimensions.get("window").width - 48} // from react-native
                        height={200}
                        yAxisLabel={"৳"}
                        withShadow={false}
                        withHorizontalLines={false}
                        chartConfig={{
                            backgroundGradientFrom: "#fff",
                            backgroundGradientTo: "#fff",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 255) =>
                                `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                    />
                </View>
                <CustomButton
                    title="Add"
                    buttonStyle={{
                        backgroundColor: "#EE6B8D",
                        height: 50,
                        marginHorizontal: 16,
                        borderRadius: 50,
                    }}
                    onPress={() => {}}
                />

                <TouchableOpacity
                    style={{
                        paddingHorizontal: 16,
                        paddingVertical: 10,
                        paddingTop: 20,
                        borderBottomColor: "#f2f2f2",
                        borderBottomWidth: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                    onPress={() => navigation.navigate("trList")}
                >
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        Recent Transactions
                    </Text>
                    <AntDesign name="right" size={16} color="black" />
                </TouchableOpacity>
                {/* flatlist of transactions */}
                <View>
                    {limitData.map((item, index) => {
                        return <TransectionView item={item} key={index} />;
                    })}
                </View>
            </ScrollView>
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

const graphStyle = StyleSheet.create({
    graphContainer: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    GraphDesc: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 16,
    },
    GraphDescItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    GraphDescItemColor: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 5,
    },
    GraphDescItemText: {
        fontSize: 16,
    },
});
