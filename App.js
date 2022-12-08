import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const App = () => (
  
    <View style={styles.container1}>
    <Button
      title="1"
      onPress={() => Alert.alert('Simple Button pressed')} />
      <Button
        title="2"
        onPress={() => Alert.alert('Simple Button pressed')} />
      <Button
        title="3"
        onPress={() => Alert.alert('Simple Button pressed')} />
  </View>
);

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    margin:10,
    justifyContent:'center',
    height:50,
    borderColor:'gray',
    borderWidth:2
  }
});

export default App;