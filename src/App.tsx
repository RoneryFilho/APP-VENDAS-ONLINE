import { SafeAreaView, Text} from 'react-native';
import Login from './modules/login';
import { LoginContainer } from './modules/login/styles/login.style';
import Input from './shared/components/input/input';
import Button from './shared/components/button/Button';


const App = () => {


  return (
    <SafeAreaView>
       <Login/>
    </SafeAreaView>
  );
};


export default App;
