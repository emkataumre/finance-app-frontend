import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EntryListScreen from "./screens/EntryListScreen";
import EntryEditScreen from "./screens/EntryEditScreen";
import EntryDeleteScreen from "./screens/EntryDeleteScreen";
import { RootStackParamList } from "./types/RootStackParamList";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="List"
          component={ListStackNavigator}
          options={{ title: "List" }}
        />
        <Tab.Screen
          name="New"
          component={EntryEditScreen}
          options={{ title: "New" }}
        />
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
        options={{ title: "Overview" }}
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
