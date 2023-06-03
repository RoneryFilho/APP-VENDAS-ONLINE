import { SafeAreaView, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  font-size: 25px;
  color: cyan;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.container}>Testando123</Text>
      <TextNew>NOVO TESTE</TextNew>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'green',
  }
})

export default App;
