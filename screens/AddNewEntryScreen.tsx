import { View, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePickerComponent from "../components/DateTimePickerComponent";
import TextInputComponent from "../components/TextInput";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { createEntry } from "../store/entrySlice";
import { CreateEntryDto } from "../dtos/CreateEntryDto";

const AddNewEntryScreen = () => {
  const [amount, setAmount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currency, setCurrency] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("-");
  const dispatch = useDispatch<AppDispatch>();

  const handleAmountChange = (text: string) => {
    setAmount(parseFloat(text)); // fixes the required "string" type on line 67(onChangeText)
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleCurrencyChange = (currency: string) => {
    setCurrency(currency);
  };

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleCommentChange = (comment: string) => {
    setComment(comment);
  };

  const handleIconPress = () => {
    dispatch(
      createEntry(
        new CreateEntryDto(amount, selectedDate, currency, name, comment)
      )
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInputComponent
          placeholder="Amount"
          keyboardType="numbers-and-punctuation"
          onChangeText={handleAmountChange}
        />
        <DateTimePickerComponent
          onChange={handleDateChange}
        ></DateTimePickerComponent>
        <TextInputComponent
          placeholder="Currency"
          keyboardType="default"
          onChangeText={handleCurrencyChange}
        />
        <TextInputComponent
          placeholder="Name"
          keyboardType="default"
          onChangeText={handleNameChange}
        />
        <TextInputComponent
          placeholder="Comment"
          keyboardType="default"
          onChangeText={handleCommentChange}
        />
      </SafeAreaView>
      <Ionicons
        name={"add-circle-outline"}
        size={50}
        color={"#000"}
        onPress={handleIconPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddNewEntryScreen;
