import styled from "styled-components/native";

interface TextContainerProps {
    color?: string;
    customMargin?:string;
    fontSize: string;
    fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular' | 'Poppins-SemiBold';
}

export const TextContainer = styled.Text<TextContainerProps> `
    ${(props) => (props.color ? `color : ${props.color};` : '' )}
    ${(props) => (props.customMargin ? `margin : ${props.customMargin};` : '' )}

    padding-top: 3px;
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fontSize};
`