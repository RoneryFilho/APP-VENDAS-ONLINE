import { View } from "react-native";
import { LoginContainer } from "../styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";
import Text from "../../../shared/text/text";
import { Theme } from "../../../shared/themes/theme";
import { texTypes } from "../../../shared/text/textTypes";



const Login = () => {

    const handleOnPress = () => {
        console.log('clicou');
    }

    return (
        <View>
            <LoginContainer>
                <Text type={texTypes.TITLE_BOLD} color={Theme.colors.blackTheme.black}>Login</Text>
                <Input/>
                <Button title='ENTRAR' margin='16px' onPress={handleOnPress}/>
            </LoginContainer>
        </View>
    );
}

export default Login;