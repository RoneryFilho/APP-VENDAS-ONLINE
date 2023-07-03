import { View } from "react-native";
import { LoginContainer } from "../styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";
import Text from "../../../shared/text/Text";
import { theme } from "../../../shared/themes/theme";
import { texTypes } from "../../../shared/text/textTypes";
import { buttonsTheme } from "../../../shared/themes/buttons";



const Login = () => {

    const handleOnPress = () => {
        console.log('clicou');
    }

    return (
        <View>
            <LoginContainer>
                <Text type={texTypes.TITLE_BOLD} color={theme.colors.neutralTheme.black}>Login</Text>
                <Input/>
                <Button 
                    type={buttonsTheme.primary} 
                    title='ENTRAR' 
                    margin='16px' 
                    disabled
                    onPress={handleOnPress}
                />
            </LoginContainer>
        </View>
    );
}

export default Login;