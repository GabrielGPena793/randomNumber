import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [number, setNumber] = useState(0);

  function handleAddNumber() {
    setNumber(number + 1);
  }

  function handleResetNumber() {
    setNumber(0);
  }

  function handleRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100);

    setNumber(randomNumber);
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text}>{number}</Text>

      <TouchableOpacity
        onPress={handleRandomNumber}
        activeOpacity={0.5}
        style={[style.buttonContainer, {width: '89%'}]}>
        <Text style={style.buttonText}>Random Number</Text>
      </TouchableOpacity>
      <View style={style.buttonsContainer}>
        <TouchableOpacity
          onPress={handleAddNumber}
          activeOpacity={0.5}
          style={[style.buttonContainer, {flex: 0.5}]}>
          <Text style={style.buttonText}>+ 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleResetNumber}
          activeOpacity={0.5}
          style={[style.buttonContainer, {backgroundColor: 'grey', flex: 0.5}]}>
          <Text style={style.buttonText}>Zerar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#15121F',
    paddingHorizontal: 25,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttonContainer: {
    padding: 15,
    backgroundColor: 'purple',
    borderRadius: 10,
    marginTop: 25,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});
