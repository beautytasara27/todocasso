import React from "react";
import { View, StyleSheet } from "react-native";
import { BarChart, ProgressChart } from "react-native-chart-kit";

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
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardHeading}>88</Text>
          <Text style={styles.cardNormal}>Completed Tasks</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardHeading}>12</Text>
          <Text style={styles.cardNormal}>Pending Tasks</Text>
        </View>
      </View>
      <ProgressChart
        data={data1}
        width={400}
        height={220}
        style={{
          marginTop: 100,
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
          marginTop: 100,
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
  },
  bar: {
    position: "absolute",
    bottom: 0,
  },
  cardContainer: {
    flexDirection: "row",
  },
  card: {
    flex: 1,
    height: 50,
    backgroundColor:"#789CD8"
  },
  cardHeading: {
    fontSize: 32,
    fontStyle: "bold",
  },
  cardNormal: {
    fontSize: 12,
    fontStyle: "normal",
  },
});
