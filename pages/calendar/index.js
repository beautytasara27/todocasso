import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Calendar } from "react-native-calendars";
import ItemList from "../../features/itemList";
export default function CalendarView() {
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
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Calendar</Text>
        <Text style={styles.summary}>Plan your week</Text>
      </View>
      <Calendar
        style={styles.calendar}
        onDayPress={(day) => console.log("selected day", day)}
        markedDates={{
          "2022-04-01": { selected: true },
          "2022-04-02": { selected: true },
          "2022-04-03": { selected: true },
        }}
        markingType={"multi-dot"}
        theme={{
          backgroundColor: "#fff",
          calendarBackground: "#fff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "white",
          todayBackgroundColor:"#789CD8",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "#000000",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "#000000",
          indicatorColor: "blue",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
      <View style={styles.centered}>
        <ItemList items={DATA}/>
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
  calendar: {
    backgroundColor:'#fff',
    width: 410,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: 10,
    shadowRadius: 10,
    padding: 10,
    marginTop: 20,
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
  centered: {
    marginTop: 20,
    paddingBottom: 220,
    justifyContent: "center",
    alignItems: "center",
  },
});
