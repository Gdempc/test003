import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Dimensions } from 'react-native';
const App = () => (
    <View style={styles.container1}>
    <View style={styles.button} 
      Button
      title="1"
      onPress={() => Alert.alert('Simple Button pressed')} />
    </View>
);

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 2,
    top: 1,
  },
  button: {
    flex: 1,
    width: 100,
  }
});

export default App;