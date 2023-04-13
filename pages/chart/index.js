import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { BarChart, ProgressChart } from "react-native-chart-kit";
import { AntDesign } from "@expo/vector-icons";

const data = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 20],
    },
  ],
};
const data1 = {
  labels: ["Work", "Personal", "School"],
  data: [0.8, 0.2, 0.6],
};
const options = {
  legend: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Chart = () => {
  return (
    <View style={styles.container}>
    <View>
        <Text style={styles.greeting}>Insights</Text>
        <Text style={styles.summary}>Track your productivity</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardHeading}>3</Text>
          <Text style={styles.cardNormal}>Completed Tasks</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardHeading}>4</Text>
          <Text style={styles.cardNormal}>Pending Tasks</Text>
        </View>
      </View>
      <View style={styles.pieChart}>
        <Text style={styles.subHeadings}>Open tasks in categories</Text>
        <View style={styles.caret}>
          <Text style={styles.cardNormal}>in 30 days</Text>
          <View style={styles.center}>
            <AntDesign name="caretdown" size={10} color="black" />
          </View>
        </View>
      </View>
      <ProgressChart
        data={data1}
        width={400}
        height={220}
        style={{
          marginTop: 10,
          paddingVertical: 20,
        }}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(68, 132, 234, ${opacity})`,
          strokeWidth: 5,
          fillShadowGradientOpacity: 0.1,
        }}
      />
      <View style={styles.pieChart}>
        <Text style={styles.subHeadings}>Weekly Task Completion</Text>
        <View style={styles.caret}>
          <Text style={styles.cardNormal}>All</Text>
          <View style={styles.center}>
            <AntDesign name="caretdown" size={10} color="black" />
          </View>
        </View>
      </View>
      <BarChart
        data={data}
        width={400}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(68, 132, 234, ${opacity})`,
          style: {
            borderRadius: 0,
          },
        }}
        style={{
          marginTop: 10,
          paddingVertical: 20,
        }}
        yAxisSuffix="hrs"
        verticalLabelRotation={0}
        {...options}
      />
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
    justifyContent: "center",
  },
  summary: {
    fontWeight: 500,
    fontSize: 16,
    alignSelf: "center",
  },
  greeting: {
    fontWeight: "bold",
    fontSize: 24,
     alignSelf: "center",
  },
  bar: {
    position: "absolute",
    bottom: 0,
  },
  center: { justifyContent: "center",marginLeft:3 },
  pieChart: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 40,
  },
  caret: {
    flexDirection: "row",
    backgroundColor: "#E6E6E6",
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  cardContainer: {
    flexDirection: "row",
    paddingTop: 20,
    alignSelf: "center",
  },
  card: {
    flex: 1,
    height: 100,
    backgroundColor: "#f4fcfc",
    marginHorizontal: 10,
  },
  cardHeading: {
    fontSize: 32,
    alignSelf: "center",
    paddingTop: 20,
  },
  cardNormal: {
    fontSize: 14,
    fontStyle: "normal",
    alignSelf: "center",
  },
  subHeadings: {
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 4,
  },
});
