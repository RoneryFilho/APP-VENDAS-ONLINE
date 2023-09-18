import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import { Icon } from '../../../shared/components/icon/icon';
import Input from '../../../shared/components/input/input';
import Text from '../../../shared/text/Text';
import { textTypes } from '../../../shared/text/textTypes';
import { buttonsTheme } from '../../../shared/themes/buttons';
import { theme } from '../../../shared/themes/theme';
import { ImageLogo, LoginContainer } from '../styles/login.style';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };

  return (
    <View>
      <LoginContainer>
        <ImageLogo resizeMode='contain' source={require('../../../assets/images/logo.png')}/>
        <Input
          margin='0px 0px 8px 0px'
          placeholder="Digite seu E-mail"
          placeholderTextColor={theme.colors.grayTheme.gray80}
          title="E-mail:"
        />
        <Input
          secureTextEntry
          placeholder="Digite sua senha"
          placeholderTextColor={theme.colors.grayTheme.gray80}
          title="Senha:"
        />
        <Button type={buttonsTheme.primary} title="ENTRAR" margin="16px" onPress={handleOnPress} />
      </LoginContainer>
    </View>
  );
};

export default Login;
