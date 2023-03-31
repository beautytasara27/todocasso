import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CheckBox from "expo-checkbox";
import Tag from "../tag";
import { useState } from "react";

export default function Item({ item }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={{ ...styles.container, borderLeftColor: item.color }}>
      <View style={{ ...styles.colorBox }}>
        <CheckBox
          disabled={false}
          value={item.completed}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
      </View>
      <View style={styles.content}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 300,
          }}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>

        <Text style={styles.details}>{item.details}</Text>
        <View>
          <Tag color={item.color} text={item.tag} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: 390,
    backgroundColor: "#f4fcfc",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: 10,
    shadowRadius: 10,
    elevation: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 4,
    borderLeftWidth: 10,
  },
  content: {},
  title: {
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 4,
  },
  time: {
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 2,
  },
  details: {
    fontWeight: "normal",
    fontSize: 14,
    paddingVertical: 2,
  },
  colorBox: {
    height: 30,
    width: 30,
    margin: 10,
  },
});
