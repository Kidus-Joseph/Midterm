import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import { useState } from 'react';
export default function App() {

  const [numberText, setNumberText] = useState('');
  const [message, setMessage] = useState('');

  function calcSquare() {
    //console.log('clicked')
    const number = parseInt(numberText);
    if (number) {
      const squared = number * number;
      setMessage(squared.toString())
    } else {
      setMessage('invalid input.')
    }
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.title}>Input a number: </Text>
        <TextInput style={styles.textInput} onChangeText={setNumberText}/>
      </View>
      <Pressable style={styles.pressable} onPress={calcSquare}>
        <Text> Calc Square</Text>
      </Pressable>
      <Text style={styles.title}>The square is {message}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 50,
  },

  title: {
    fontSize: 20,
    color: 'blue', 
  },


  pressable: {
    marginVertical: 10,
    borderWidth: 2, 
    borderColor: 'green',
    padding: 5,
  },

  textInput: {
    borderWidth: 1, 
    width: 60,
    padding: 10,
    marginVertical: 10,
    marginLeft: 10, 
  },
});
