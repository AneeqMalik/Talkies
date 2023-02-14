import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import ChatsScreen from "./src/screens/ChatsScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    console.log(Platform.OS),
    (
      <SafeAreaView style={styles.droidSafeArea}>
        <View style={styles.container}>
          <ChatsScreen />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
  },
  droidSafeArea: {
    flex: 1,
    // backgroundColor: "white",
  },
});
