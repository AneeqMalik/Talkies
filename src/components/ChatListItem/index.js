import { Text, View, Image, StyleSheet } from "react-native";

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://www.sportrx.com/sportrx-blog/wp-content/uploads/2022/03/ray-ban-rb3625-new-aviator-size-58.jpg",
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>Aneeq</Text>
          <Text style={styles.subTitle}>8:30</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>Hello 😊</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray'
  },
  row: {
    flexDirection: "row",
    marginBottom: 5
  },
  name: {
    flex: 1,
    fontWeight: 'bold'
  },
  subTitle: {
    color: 'gray'
  },
});

export default ChatListItem;
