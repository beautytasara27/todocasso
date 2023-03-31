import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Item from "../../features/item";
import ItemList from "../../features/itemList";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Doggos",
    time: "08:00",
    details: "Feed the dogs",
    color: "#FFF0B5",
    tag: "Other",
    completed: true,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Emails",
    time: "08:30",
    details: "Email tory about that thing",
    color: "#FFD1DC",
    tag: "Work",
    completed: true,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Exercise",
    time: "09:00",
    details: "30 minute jog",
    color: "#B2D8B2",
    tag: "Wellness",
    completed: true,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bf",
    title: "Start work",
    time: "10:00",
    details: "Work on Admin dashboard feature for 2 hours",
    color: "#AEC6CF",
    tag: "Work",
    completed: false,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6f",
    title: "Lunch",
    time: "12:00",
    details: "Dont forget to eat healthy",
    color: "#B2D8B2",
    tag: "Wellness",
    completed: false,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7f",
    title: "Must do",
    time: "14:00",
    details: "Add archive page on my portfolio",
    color: "#FF6961",
    tag: "Personal",
    completed: false,
  },
  {
    id: "58694a0f-3da1-471f-b446-142271e29d7f",
    title: "Dinner",
    time: "18:00",
    details: "Make dinner",
    color: "#B2D8B2",
    tag: "Wellness",
    completed: false,
  },
];
export default function Start() {
  const [toggleList, setToggleList] = useState(true);
  const [items, setItems] = useState(
    DATA.filter((item) => item.completed === false)
  );
  useEffect(() => {
    setItems(DATA.filter((item) => item.completed === !toggleList));
  }, [toggleList]);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Goood Morning, Beauty</Text>
        <Text style={styles.summary}>You have 7 things to do today</Text>
      </View>
      <View style={styles.buttonMenu}>
        <Pressable
          style={{
            ...styles.button1,
            backgroundColor: toggleList ? "#4484EA" : "#D3D3D3",
          }}
          onPress={() => setToggleList(true)}
        >
          <Text style={styles.buttonText}>{"To Do"}</Text>
        </Pressable>
        <Pressable
          style={{
            ...styles.button1,
            backgroundColor: toggleList ? "#D3D3D3" : "#4484EA",
          }}
          onPress={() => setToggleList(false)}
        >
          <Text style={styles.buttonText}>{"Done"}</Text>
        </Pressable>
      </View>
      <View style={styles.filter}>
        <Ionicons name="filter" size={24} color="black" />
        <Text>Filter</Text>
      </View>

      <View style={styles.centered}>
        <ItemList items={items} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 0,
    paddingTop: 50,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  summary: {
    fontWeight: 500,
    fontSize: 16,
    alignSelf: "center",
  },
  greeting: {
    fontWeight: "bold",
    fontSize: 24,
  },
  button1: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
  },
  button: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    fontSize: 16,
    fontWeight: 500,
  },
  buttonMenu: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 40,
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    marginVertical: 20,
  },
  filter: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-start",
    marginLeft: 40,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
