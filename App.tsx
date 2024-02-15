import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EntryListScreen from "./screens/EntryListScreen";
import EntryEditScreen from "./screens/EntryEditScreen";
import EntryDeleteScreen from "./screens/EntryDeleteScreen";
import { RootStackParamList } from "./types/RootStackParamList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ title: "Overview" }}
            name="EntryListScreen"
            component={EntryListScreen}
          />
          <Stack.Screen
            options={{ title: "Edit Entries" }}
            name="EntryEditScreen"
            component={EntryEditScreen}
          />
          <Stack.Screen
            options={{ title: "Delete Entries" }}
            name="EntryDeleteScreen"
            component={EntryDeleteScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="EntryEditScreen"
            options={{ title: "Edit Entries" }}
            component={EntryEditScreen}
          />
          <Tab.Screen name="EntryDeleteScreen" component={EntryDeleteScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
