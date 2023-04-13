import React, { Fragment } from "react";
import { Text, StyleSheet, View, TouchableOpacity,  } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Start from "../../pages/start";
import Calendar from "../../pages/calendar";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import Hourglass from "../../pages/podomoro";
import Chart from "../../pages/chart";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: "#4484EA",
        inactiveTintColor: "gray",
        showLabel: false,
        tabBarActiveTintColor: "#4484EA",
        tabBarStyle: {
          paddingVertical: 10,
          height: 68,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          elevation: 5,
        },

        tabBarBackground: () => <View style={styles.container} />,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Start}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? "#4484EA" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo
              name="calendar"
              size={24}
              color={focused ? "#4484EA" : "gray"}
            />
          ),
        }}
      />
   

      <Tab.Screen
        name="Charts"
        component={Chart}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="stats-chart"
              size={24}
              color={focused ? "#4484EA" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Focus"
        component={Hourglass}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="hourglass-2"
              size={24}
              color={focused ? "#4484EA" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 5,
    marginTop: 0,
    height: 200,
    elevation: 10,
  },
});
