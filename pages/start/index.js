import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Item from "../../features/item";
import ItemList from "../../features/itemList";
import { Ionicons } from "@expo/vector-icons";
export default function Start() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Goood Morning, Beauty</Text>
        <Text style={styles.summary}>You have 7 things to do today</Text>
      </View>
      <View style={styles.buttonMenu}>
        <Pressable style={styles.button1}>
          <Text style={styles.buttonText}>{"To Do"}</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>{"Done"}</Text>
        </Pressable>
      </View>
      <View style={styles.filter}>
        <Ionicons name="filter" size={24} color="black" />
        <Text>Filter</Text>
      </View>

      <View style={styles.centered}>
        <ItemList />
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
    marginTop: 4,
    paddingTop: 10,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  summary: {
    fontWeight: 500,
    fontSize: 16,
    alignSelf:'center'
  },
  greeting: {
    fontWeight: "bold",
    fontSize: 24,
  },
  button1: {
    flex: 1,
    backgroundColor: "black",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
  },
  button: {
    flex: 1,
    backgroundColor: "#D3D3D3",
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
    display:'flex',
    flexDirection:'row',
    alignSelf: "flex-start",
    marginLeft: 40,
    marginBottom: 20,
    justifyContent:'center',
    alignItems:'center',
    gap:4
  },
});
