import { StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.text}> Hello Daniel </Text>
        <Text style={styles.subtitle}>
          Welcome to ode to the things, Let us open executive life together
        </Text>
      </View>

      <TextInput style={styles.input} placeholder={'Search'}/>

      <View style={styles.tabs}>

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
    backgroundColor: '#f1efef',
    borderColor: 'transparent',
    color:'black',
  },
  tabs:{
    marginTop:30,

  }
});
