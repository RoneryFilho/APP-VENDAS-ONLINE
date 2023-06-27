import { Text, View } from "react-native";
import { LoginContainer } from "../styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";



const Login = () => {

    const handleOnPress = () => {
        console.log('clicou');
    }

    return (
        <View>
            <LoginContainer>
                <Text>Login</Text>
                <Input/>
                <Button title='ENTRAR' margin='16px' onPress={handleOnPress}/>
            </LoginContainer>
        </View>
    );
}

export default Login;