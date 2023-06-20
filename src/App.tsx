import { NativeSyntheticEvent, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TextInputChangeEventData } from 'react-native';
import styled from 'styled-components/native';
import Example from './Example';
import { useState } from 'react';


const App = () => {
const [valor, setValor] = useState<string>('');

const handleOnChangeInput = (valor: NativeSyntheticEvent<TextInputChangeEventData>) => {
  setValor(valor.nativeEvent.text);
}

  return (
    <SafeAreaView>
      <ScrollView style={styles.scroll}>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
      </ScrollView>
      <Example text='Texto Original'>Exemplo Children</Example>
      <Example text='Texto Original 2'>Exemplo Children 2</Example>
      <TextInput onChange={handleOnChangeInput} value={valor} style={styles.input}></TextInput>
      <Text style={styles.container}>Valor input: {valor}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'black',
    fontSize: 30,
    backgroundColor: 'aqua'
  },
  input: {
    backgroundColor:'#ddd',
    margin: 16,
    fontSize: 20
  },
  scroll: {
    backgroundColor: 'aqua',
    height: 150,
  },
})

export default App;
