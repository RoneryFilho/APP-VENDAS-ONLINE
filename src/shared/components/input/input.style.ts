import styled from "styled-components/native"
import { theme } from "../../themes/theme";

export const InputContainer = styled.TextInput `
    width: 100%;
    height: 44px;
    padding: 12px;
    background-color: ${theme.colors.neutralTheme.white};
    color: gray;

    border-width: 1px;
    border-color: ${theme.colors.grayTheme.gray80}
`;