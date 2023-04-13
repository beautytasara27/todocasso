import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Hourglass() {
  const [workTime, breakTime, totalIntervals] = [1, 1, 3];
  const [timeRemaining, setTimeRemaining] = useState(workTime * 60);
  const [intervalCount, setIntervalCount] = useState(0);
  const [isWorking, setIsWorking] = useState(true);
  const totalTime = isWorking ? workTime * 60 : breakTime * 60;

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        clearInterval(interval);
        if (isWorking) {
          if (intervalCount < totalIntervals - 1) {
            setIsWorking(false);
            setIntervalCount(intervalCount + 1);
            setTimeRemaining(breakTime * 60);
          } else {
            // End of last work interval
            // Do something here, such as showing a message or sound
          }
        } else {
          setIsWorking(true);
          setTimeRemaining(workTime * 60);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining, isWorking]);

  const sandHeight = (timeRemaining / totalTime) * 100;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Focus Mode</Text>
        <Text style={styles.summary}>You can do this 💪🏾</Text>
      </View>
      <View
        style={{ ...styles.bar, borderColor: isWorking ? "#789CD8" : "red" }}
      >
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            top: `${sandHeight}%`,
            backgroundColor: isWorking ? "#789CD8" : "red",
          }}
        />
      </View>
      <Text>
        {isWorking ? "Work" : "Break"} interval {intervalCount + 1} of{" "}
        {totalIntervals}
      </Text>
      <Text>
        {Math.floor(timeRemaining / 60)}:
        {("0" + (timeRemaining % 60)).slice(-2)}
      </Text>
      <View style={{ ...styles.cardContainer, backgroundColor:'#CCCCCC', alignItems:'center', justifyItems:'center', marginTop:20 , borderRadius:20}}>
        <View
          style={{
            ...styles.card,
            backgroundColor: "#CCCCCC",
            height: 30,
            width: 30,
            flex: 0,
            alignItems: "center",
            borderRadius:25,
            marginVertical:5,
            marginHorizontal:15
          }}
        >
          <FontAwesome5 name="pause" size={20} color="white" />
        </View>
        <View
          style={{
            ...styles.card,
            backgroundColor: "#CCCCCC",
            height: 30,
            width: 30,
            flex: 0,
            alignItems: "center",
            borderRadius:25,
            marginVertical:5,
            marginHorizontal:15
          }}
        >
          <FontAwesome5 name="stop" size={20} color="white" />
        </View>
      </View>
      <View style={{...styles.cardContainer, marginTop:50}}>
        <View style={{ ...styles.card, backgroundColor: "#C2FFC2" }}>
          <Text style={styles.cardHeading}>😊</Text>
          <Text style={styles.cardNormal}>7hrs 20 min</Text>
        </View>
        <View style={{ ...styles.card, backgroundColor: "#FFA0A0" }}>
          <Text style={styles.cardHeading}>😴</Text>
          <Text style={styles.cardNormal}>1hr 30min</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, alignItems: "center" },
  summary: {
    fontWeight: 500,
    fontSize: 16,
    alignSelf: "center",
  },
  greeting: {
    fontWeight: "bold",
    fontSize: 24,
  },
  bar: {
    width: 100,
    height: 200,
    borderWidth: 1,
    marginTop: 50,
  },
  cardContainer: {
    flexDirection: "row",
    paddingTop: 0,
    alignSelf: "center",
  },
  card: {
    flex: 1,
    height: 100,
    backgroundColor: "#f4fcfc",
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: "center",
  },
  cardHeading: {
    fontSize: 32,
    alignSelf: "center",
  },
  cardNormal: {
    fontSize: 14,
    fontStyle: "normal",
    alignSelf: "center",
  },
});
