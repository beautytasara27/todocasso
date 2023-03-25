import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, FlatList, StyleSheet, Text, ScrollView } from "react-native";

import Item from "../item";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Doggos",
    time: "08:00",
    details: "Feed the dogs",
    color:'#FFF0B5',
    tag:'Other'
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Emails",
    time: "08:30",
    details: "Email tory about that thing",
    color:'#FFD1DC',
    tag:'Work'
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Exercise",
    time: "09:00",
    details: "30 minute jog",
    color:'#B2D8B2',
    tag:'Wellness'
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bf",
    title: "Start work",
    time: "10:00",
    details: "Work on Admin dashboard feature for 2 hours",
    color:'#AEC6CF',
    tag:'Work'
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6f",
    title: "Lunch",
    time: "12:00",
    details: "Dont forget to eat healthy",
    color:'#B2D8B2',
    tag:'Wellness'
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7f",
    title: "Must do",
    time: "14:00",
    details: "Add archive page on babe's portfolio",
    color:'#FF6961',
    tag:'Love'
  },
  {
    id: "58694a0f-3da1-471f-b446-142271e29d7f",
    title: "Dinner",
    time: "18:00",
    details: "Make dinner",
    color:'#B2D8B2',
    tag:'Wellness'
  },
];
const renderFooter = () => {
    return <View style={{ height: 100 }} />;
  };

export default function ItemList() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:100
  }
});
