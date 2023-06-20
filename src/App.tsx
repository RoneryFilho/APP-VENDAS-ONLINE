import { FlatList, NativeSyntheticEvent, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TextInputChangeEventData } from 'react-native';
import styled from 'styled-components/native';
import Example from './Example';
import { useState } from 'react';


const App = () => {

const list: string [] = [
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
  'teste',
]

  return (
    <SafeAreaView>
      <FlatList style={styles.flat} data={list} renderItem={({item}) => <Text style={styles.container}>{item}</Text>}/>
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
  },
})

export default App;
