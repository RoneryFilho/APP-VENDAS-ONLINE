import { FlatList, NativeSyntheticEvent, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TextInputChangeEventData, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Example from './Example';
import { useState } from 'react';


const App = () => {

const handleOnPress = () => {
  console.log('Passou no touch')
}

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handleOnPress}>
        <Text style={styles.container}>CLIQUE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'black',
    fontSize: 30,
    backgroundColor: '#ddd'
  },
  flat: {
    backgroundColor: 'blue',
    height: 500
  },
})

export default App;
