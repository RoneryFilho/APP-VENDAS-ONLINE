import styled  from "styled-components/native";
import { theme } from "../../themes/theme";
import LinearGradient from "react-native-linear-gradient";

interface ButtonContainerProps {
    margin?: string;
}

export const GradientButton = styled(LinearGradient)<ButtonContainerProps>`
    height: 100%;
    width: 100%;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    height: 48px;
    width: 100%;
    border-radius: 4px;
    justify-content: center;
    align-items: center;

    ${(props) => props.margin ? `margin: ${props.margin};` : ''}; 
`

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
    ${(props) => props.margin ? `margin: ${props.margin};` : ''};

    background-color: transparent;
    border-width: 1px;
    border-color: ${theme.colors.mainTheme.primary};
`