import { StyleSheet, View, Text, TouchableOpacity, HandleOperationPress, handleNumberPress } from "react-native";
import {useState} from 'react';

export default function App() {

  const [count, setCount] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState(null);

  const buttonClick = (text) => {
    setResult(result + text);
  }


  return(
    <>
    <View style={styles.container2}>
      <View style={styles.mathbox}>
      <Text style={styles.textCalc}>{result}</Text>
      </View>
    </View>

      <View style={styles.container}>
        
        <TouchableOpacity onPress={()=>{buttonClick(1)}} style={styles.square}>
          <Text style={styles.text} value="1">1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{buttonClick(2)}} style={styles.square} value="2">
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{buttonClick(3)}} style={styles.square} value="3">
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareof} value="*" >
          <Text style={styles.text}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{buttonClick(4)}}style={styles.square} value="4">
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{buttonClick(5)}}style={styles.square} value="5">
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{buttonClick(6)}}style={styles.square} value="6">
          <Text style={styles.text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareof} value="/">
          <Text style={styles.text}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{buttonClick(7)}}style={styles.square} value="7">
          <Text style={styles.text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{buttonClick(8)}}style={styles.square} value="8">
          <Text style={styles.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{buttonClick(9)}}style={styles.square} value="9">
          <Text style={styles.text}>9</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.squareof} value="+">
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{buttonClick(0)}}style={styles.square0} value="0">
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} value=",">
          <Text style={styles.text}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareof} value="-">
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{buttonClick(AC)}} style={styles.squareof} value="AC">
          <Text style={styles.text}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareof} value="C">
          <Text style={styles.text}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareof} value="%">
          <Text style={styles.text}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareof} value="=">
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
    fontSize: 35,
    color: "rgb(232,209,140)"
  },
  textCalc:{
    marginLeft: 5,  
    fontSize: 30,
    color: "black"
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
    height:"60%",
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