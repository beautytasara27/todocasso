import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import TabNavigator from "../navigation/bottomTab";
import AddToDo from "../pages/add";

export default function App() {
  return (
    <>
      <TabNavigator />
      <AddToDo />
    </>
  );
}
