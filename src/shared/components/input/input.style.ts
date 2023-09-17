import styled from 'styled-components/native';

import { theme } from '../../themes/theme';

interface InputContainerProps {
    isError?:boolean;
}

export const InputContainer = styled.TextInput<InputContainerProps>`
  width: 100%;
  height: 44px;
  padding: 12px;
  background-color: ${theme.colors.neutralTheme.white};
  color: gray;

  border-width: 1px;
  border-color: ${(props) => props.isError ? theme.colors.orangeTheme.orange80 : theme.colors.grayTheme.gray80};
`;
