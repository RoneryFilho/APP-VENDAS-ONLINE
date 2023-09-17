import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import { Icon } from '../../../shared/components/icon/icon';
import Input from '../../../shared/components/input/input';
import Text from '../../../shared/text/Text';
import { textTypes } from '../../../shared/text/textTypes';
import { buttonsTheme } from '../../../shared/themes/buttons';
import { theme } from '../../../shared/themes/theme';
import { LoginContainer } from '../styles/login.style';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };

  return (
    <View>
      <LoginContainer>
        <Icon name="home3" color="black" size={44}/>
        <Input
          errorMessage="Usuário ou senha inválidos"
          placeholder="Digite seu E-mail"
          placeholderTextColor={theme.colors.grayTheme.gray80}
          title="E-mail:"
        />
        <Button
          type={buttonsTheme.primary}
          title="ENTRAR"
          margin="16px"
          onPress={handleOnPress}
        />
      </LoginContainer>
    </View>
  );
};

export default Login;
