import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import bg from "../../assets/images/BG.png";
import messages from "../../assets/data/messages.json";
import Message from "../components/Message";

const ChatScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
        <View></View>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        style={styles.list}
        inverted
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    // flex: 1,
  },
  list: {
    padding: 6,
    marginTop: 10
  },
});

export default ChatScreen;
