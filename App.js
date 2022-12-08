import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.square} >
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} >
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} >
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} >
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} >
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} >
          <Text style={styles.text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} >
          <Text style={styles.text}>7</Text>
        </TouchableOpacity><TouchableOpacity style={styles.square} >
          <Text style={styles.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} >
          <Text style={styles.text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} >
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7CA1B4",
    flexWrap: "wrap",
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 2,
    height: "60%",
  },
  square: {
    backgroundColor: "#7cb48f",
    width: "26%",
    height: "21%",
    margin: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    fontSize: 30,
  }
});