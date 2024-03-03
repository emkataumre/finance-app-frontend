import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import TextInputComponent from "../components/TextInput";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { UpdateEntryDto } from "../dtos/UpdateEntryDto";
import { updateEntry } from "../store/entrySlice";
import DateTimePickerComponent from "../components/DateTimePickerComponent";

const EntryEditScreen = () => {
  const item = useSelector((state: RootState) => state.entries.item);
  const [amount, setAmount] = useState(item.amount);
  const [selectedDate, setSelectedDate] = useState(new Date(item.date));
  const [currency, setCurrency] = useState(item.currency);
  const [name, setName] = useState(item.name);
  const [comment, setComment] = useState(item.comment);
  const dispatch = useDispatch<AppDispatch>();

  const handleAmountChange = (text: string) => {
    setAmount(parseFloat(text)); // Convert to float
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
    const id = item.id;
    const updatedEntry = new UpdateEntryDto(
      id,
      amount,
      selectedDate,
      currency,
      name,
      comment
    );
    dispatch(updateEntry({ id, entry: updatedEntry }));
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInputComponent
          placeholder="Amount"
          keyboardType="numbers-and-punctuation"
          onChangeText={handleAmountChange}
          value={amount.toString()}
        />
        <DateTimePickerComponent
          onChange={handleDateChange}
        ></DateTimePickerComponent>
        <TextInputComponent
          placeholder="Currency"
          keyboardType="default"
          onChangeText={handleCurrencyChange}
          value={currency}
        />
        <TextInputComponent
          placeholder="Name"
          keyboardType="default"
          onChangeText={handleNameChange}
          value={name}
        />
        <TextInputComponent
          placeholder="Comment"
          keyboardType="default"
          onChangeText={handleCommentChange}
          value={comment}
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

export default EntryEditScreen;
