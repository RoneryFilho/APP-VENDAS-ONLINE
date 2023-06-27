import { SafeAreaView, Text} from 'react-native';
import Login from './modules/login';
import { ContainerLogin } from './modules/login/styles/login.style';
import Input from './shared/components/input/input';


const App = () => {


  return (
    <SafeAreaView>
       <ContainerLogin>
        <Text>Teste</Text>
        <Input/>
       </ContainerLogin>
    </SafeAreaView>
  );
};


export default App;
