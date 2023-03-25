import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@expo/router";

const Tab = createBottomTabNavigator();
const Screen1 = () => {
  return <Text>Screen 1</Text>;
};

const Screen2 = () => {
  return <Text>Screen 2</Text>;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Screen1" component={Screen1} />
    <Tab.Screen name="Screen2" component={Screen2} />
  </Tab.Navigator>
  );
};

export default TabNavigator;
