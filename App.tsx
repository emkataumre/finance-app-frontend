import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "./types/RootStackParamList";
import EntryList from "./pages/EntryList";
import EntryEdit from "./pages/EntryEdit";
import EntryDelete from "./pages/EntryDelete";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cathegories from "./pages/Cathegories";
import { CathegoriesParam } from "./types/CathegoriesParam";

const RootStack = createNativeStackNavigator<RootStackParamList>();
const CathegoriesStack = createNativeStackNavigator<CathegoriesParam>();
const Tab = createBottomTabNavigator();

const EntryStackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="EntryList">
      <RootStack.Screen name="EntryList" component={EntryList} />
      <RootStack.Screen
        name="EntryEdit"
        component={EntryEdit}
        initialParams={{ EntryId: 1 }}
      />
      <RootStack.Screen name="EntryDelete" component={EntryDelete} />
    </RootStack.Navigator>
  );
};

const CathegoriesNavigator = () => {
  return (
    <CathegoriesStack.Navigator>
      <CathegoriesStack.Screen name="Cathegory" component={Cathegories} />
    </CathegoriesStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={EntryStackNavigator} />
        <Tab.Screen name="Cathegories" component={CathegoriesNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
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
