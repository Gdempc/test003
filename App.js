import { StyleSheet, View, Text, TouchableOpacity, HandleOperationPress, handleNumberPress } from "react-native";
import {useState} from 'react';

export default function App() {
  return (
    <>
    <View style={styles.container2}>
      <View style={styles.answerbox}></View>
      <View style={styles.mathbox}></View>


    </View>
      <View style={styles.container}>
        
        <TouchableOpacity onPress={() => HandleNumberPress("1")} style={styles.square}>
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} >
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} >
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareof} >
          <Text style={styles.text}>*</Text>
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
        <TouchableOpacity style={styles.squareof} >
          <Text style={styles.text}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} >
          <Text style={styles.text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} >
          <Text style={styles.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} >
          <Text style={styles.text}>9</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.squareof} >
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square0} >
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} >
          <Text style={styles.text}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareof} >
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareof} >
          <Text style={styles.text}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareof} >
          <Text style={styles.text}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareof} >
          <Text style={styles.text}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareof} >
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1f1f1f",
    flexWrap: "wrap",
    flexDirection: 'row',
    height: "60%",
  },
  square: {
    backgroundColor: "#AA8855",
    width: "20%",
    height: "16%",
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  square0: {
    backgroundColor: "#AA8855",
    width: "44%",
    height: "16%",
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  squareof: {
    backgroundColor: "#775522",
    width: "20%",
    height: "16%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    right:0,
    margin:8,
  },
  text:{
    fontSize: 30,
    color: "rgb(232,209,140)"
  },
  container2: {
    height: "40%",
    backgroundColor: "#1f1f1f"
  },
  answerbox: {
    backgroundColor: "#FFFFFF",
    width: 200,
    height:100,
    top:20,
    left:185,
    borderRadius:40,
  },
  mathbox:{
    margin: 10,
    backgroundColor: "#B0B0B0",
    width: "95%",
    height:100,
    top:40,
    borderRadius:20,
  },
  smallercont: {
    backgroundColor: "#6F6F6F",
    flexWrap: "wrap",
    alignItems: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 2,
    height: "80%",
    width: "76%",
  }
});