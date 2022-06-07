import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.text}> Hello Daniel </Text>
        <Text style={styles.subtitle}>
          Welcome to ode to the things, Let us open executive life together
        </Text>
      </View>

      <View>

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
});
