import { SafeAreaView, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';
import Example from './Example';

const App = () => {
  return (
    <SafeAreaView>
      <Example text='Exemplo de text'>Exemplo Children</Example>
      <Example text='Exemplo de text 2'>Exemplo Children 2</Example>
      <Text>Testando</Text>
    </SafeAreaView>
  );
};

export default App;
