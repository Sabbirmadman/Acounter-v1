import { View, Text } from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function DatePicker({ navigation }) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(
        new Date().toLocaleDateString()
    );
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date.toLocaleDateString());
        hideDatePicker();
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity title="Show Date Picker" onPress={showDatePicker}>
                <AntDesign name="calendar" size={38} color="black" />
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <View>
                <Text>Selected Date </Text>
                <Text>{selectedDate}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
    },
});
