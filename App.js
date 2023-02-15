import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import ChatScreen from "./src/screens/ChatScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    console.log(Platform.OS),
    (
      <SafeAreaView style={styles.droidSafeArea}>
        <View style={styles.container}>
          <ChatScreen />
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
