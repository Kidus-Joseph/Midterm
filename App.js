import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [numberText1, setNumberText1] = useState('');
  const [numberText2, setNumberText2] = useState('');
  const [message, setMessage] = useState('');

  function calcAddition() {
    //console.log('clicked')
    const number1 = parseInt(numberText1);
    const number2 = parseInt(numberText2);
    if (10>number1<20) {
      const squared = number1 + number2 ;
      setMessage(squared.toString())
    } 
    else {
      return `Number 1 should be in [10,20]. Number 2 should be in [100,200]`
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.textHeading}> 
        <Text style={styles.textHeading1}>IS657 Midterm</Text>
      </View>
      <View style={styles1.container1}>
        <Text style={styles1.numberInput1}> Number1 [10 to 20]:</Text>
        <View style={styles1.boxInput1}>
          <TextInput 
            onChangeText={setNumberText1}
            keyboardType='numeric'></TextInput>
        </View>
        <Text style={[styles1.numberInput2, {paddingTop: 20}]}> Number2 [100 to 200]:</Text>
        <View style={styles1.boxInput1}>
          <TextInput 
            onChangeText={setNumberText2}
            keyboardType='numeric'></TextInput>
        </View>
      </View>
      <View style={styles2.container2}>
        <Button style={styles2.buttonCalculation}
        title='CALCULATE SUM' onPress={calcAddition}/>
        <TextInput style={styles1.boxInput1}> {message}</TextInput>
      <Text style={{color: 'red'}}>The square is {message}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },

  textHeading: {
    width: 350,
    height: 200,
    backgroundColor: 'teal',
    justifyContent: 'center'
  }, 

  textHeading1: {
    color: 'gold',
    fontSize: 35,
    textAlign: 'center',
  },
});

const styles1 = StyleSheet.create({
  container1: {
    flexWrap: 'wrap', 
    width: 350,
    height: 'auto', 
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row,' 
  },

  numberInput1: {  
    paddingTop: 10,
  },

  numberInput2: {
    paddingTop: 20,
  },

  boxInput1: {
    alignItems: 'flex-end',
    height: 40,
    margin: 12, 
    borderWidth: 1,
    padding: 10,
  },
});

const styles2 = StyleSheet.create({
  container2: {
    width: 150, 
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
    paddingTop: 20,
    marginRight: 200,
  },

  buttonCalculation: { 
    width: 'auto', 
    height: 'auto',  
    borderWidth: 1, 
    borderColor: 'blue',
    backgroundColor: 'blue',
  },
});
