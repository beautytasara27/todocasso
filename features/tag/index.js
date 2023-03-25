import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, FlatList, StyleSheet, Text } from "react-native";

export default function Tag({ color, text }) {
  return (
    <View style={styles.container}>
      <Text style={{  backgroundColor: color, alignSelf:'flex-start', padding:2}}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    maxWidth:100,
    justifyItems:'center'
  },
});
