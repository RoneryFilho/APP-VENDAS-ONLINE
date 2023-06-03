import { SafeAreaView, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';
import Example from './Example';

const App = () => {
  return (
    <SafeAreaView>
      <Example text='Text Example 1'>Children example 1</Example>
      <Example text='Text Example 2'>Children example 2</Example>
      <Text>Testando</Text>
    </SafeAreaView>
  );
};

export default App;
