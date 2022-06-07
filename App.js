import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const tabs = ["Popular", "New", "Discount"];
const cards = [
  {
    id: 1,
    title: "Paper Backs",
    price: "26$",
    img: require("./assets/js.jpeg"),
  },
  {
    id: 2,
    title: "ArchiBlokcs",
    price: "16$",
    img: require("./assets/apollo.png"),
  },
  {
    id: 3,
    title: "Words for Demo",
    price: "72$",
    img: require("./assets/react.jpeg"),
  },
  {
    id: 4,
    title: "React Native",
    price: "124$",
    img: require("./assets/redux.jpeg"),
  },
  {
    id: 5,
    title: "Web Browser",
    price: "142$",
    img: require("./assets/rn.jpeg"),
  },
];
const women = [
  {
    id: 1,
    img: require("./assets/woomen1.jpeg"),
  },
  {
    id: 2,
    img: require("./assets/women2.jpeg"),
  },
  {
    id: 3,
    img: require("./assets/women3.jpeg"),
  },
  {
    id: 4,
    img: require("./assets/women4.jpeg"),
  },
];


const renderItems = ({ item }) => (
  <Text style={{ marginHorizontal: 5, fontSize: 18 }}>{item}</Text>
);

const renderCards = ({ item }) => (
  <View style={{ marginHorizontal: 5 }}>
    <Image
      style={{ width: 200, height: 250, borderRadius: 10 }}
      source={item.img}
    />
    <Text>{item.title}</Text>
    <Text>{item.price}</Text>
  </View>
);

const renderWomen = ({ item }) => (
  <View
    style={{
      width: 100,
      marginTop: 5,
      display: "flex",
      justifyContent: "space-around",
    }}
  >
    <Image
      style={{ width: 70, height: 70, borderRadius: "50%" }}
      source={item.img}
    />
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.text}> Hello Kostya </Text>
        <Text style={styles.subtitle}>
          Welcome to ode to the things, Let us open executive life together
        </Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder={"Search"} />
      </View>

      <View style={styles.tabs}>
        <FlatList data={tabs} horizontal renderItem={renderItems} />
      </View>
      <View>
        <FlatList
          style={styles.cards}
          horizontal
          data={cards}
          renderItem={renderCards}
        />
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 18 }}>Artists</Text>
        <FlatList data={women} horizontal renderItem={renderWomen} />
      </View>

      <StatusBar barStyle={"dark-content"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f8f8",
    padding: 10,
  },
  heading: {
    marginTop: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  subtitle: {
    marginTop: 20,
    fontWeight: "100",
    maxWidth: 325,
    width: "100%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f1efef",
    borderColor: "transparent",
    color: "black",
  },
  tabs: {
    marginTop: 10,
  },
  cards: {
    marginTop: 20,
  },
});
