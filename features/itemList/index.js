import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, FlatList, StyleSheet, Text, ScrollView } from "react-native";

import Item from "../item";

const renderFooter = () => {
    return <View style={{ height: 100 }} />;
  };

export default function ItemList({items}) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        ListFooterComponent={renderFooter}
        style={{ height: '100%' }}
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
