import styled  from "styled-components/native";

interface ButtonContainerProps {
    margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    height: 48px;
    width: 100%;
    border-radius: 4px;
    background-color: pink;
    justify-content: center;
    align-items: center;

    ${(props) => props.margin ? `margin: ${props.margin};` : ''} 
`