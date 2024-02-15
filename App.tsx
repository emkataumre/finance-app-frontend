import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EntryListScreen from "./screens/EntryListScreen";
import EntryEditScreen from "./screens/EntryEditScreen";
import EntryDeleteScreen from "./screens/EntryDeleteScreen";
import { RootStackParamList } from "./types/RootStackParamList";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button } from "react-native";
import AddNewEntryScreen from "./screens/AddNewEntryScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: "list-sharp" | "add" | undefined;

            if (route.name === "List") {
              iconName = "list-sharp";
            } else if (route.name === "New") {
              iconName = "add";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="List" component={ListStackNavigator} />
        <Tab.Screen name="New" component={AddNewEntryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const ListStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EntryListScreen"
        component={EntryListScreen}
        options={{
          title: "Overview",
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
      <Stack.Screen
        name="EntryEditScreen"
        component={EntryEditScreen}
        options={{ title: "Edit Entries" }}
      />
      <Stack.Screen
        name="EntryDeleteScreen"
        component={EntryDeleteScreen}
        options={{ title: "Delete Entries" }}
      />
    </Stack.Navigator>
  );
};

export default App;
