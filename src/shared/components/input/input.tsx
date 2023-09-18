import { useState } from 'react';
import { TextInputProps, View } from 'react-native';

import Text from '../../text/Text';
import { textTypes } from '../../text/textTypes';
import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import { Icon } from '../icon/icon';
import { IconEye, InputContainer } from './input.style';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
}

const Input = ({ title, margin,secureTextEntry, errorMessage, ...props }: InputProps) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);

  const handleOnPressEye = () => {
    setCurrentSecure((current) => !current);
  }

  return (
    <DisplayFlexColumn customMargin={margin}>
      {title && (
        <Text
          margin="0px 0px 4px 4px"
          color={theme.colors.neutralTheme.black}
          type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
        >
          {title}
        </Text>
      )}

      <View>
        <InputContainer hasSecureTextEntry={secureTextEntry} secureTextEntry={currentSecure} isError={!!errorMessage} {...props} />
        { secureTextEntry && (<IconEye onPress={handleOnPressEye} name={currentSecure ? 'eye' : 'eye-blocked'} size={25}/>)}
      </View>

      {errorMessage && (
        <Text
          type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
          color={theme.colors.orangeTheme.orange80}
          margin="0px 0px 0px 4px"
        >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
