import styled from 'styled-components/native';

import { theme } from '../../themes/theme';
import { Icon } from '../icon/icon';

interface InputContainerProps {
    isError?: boolean;
    hasSecureTextEntry?: boolean;
}

export const InputContainer = styled.TextInput<InputContainerProps>`
  width: 100%;
  height: 44px;
  padding: 12px;
  background-color: ${theme.colors.neutralTheme.white};
  color: ${theme.colors.neutralTheme.black};

  padding-right: ${(props) => (props.hasSecureTextEntry ? '50px' : '12px')};

  border-width: 1px;
  border-color: ${(props) => props.isError ? theme.colors.orangeTheme.orange80 : theme.colors.grayTheme.gray80};
`;

export const IconEye = styled(Icon)`
  position: absolute;
  right: 12;
  top: 8px;
`