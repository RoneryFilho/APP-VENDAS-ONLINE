import styled from "styled-components/native";

interface TextContainerProps {
    color?: string;
    margin?:string;
    fontSize: string;
    fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular' | 'Poppins-SemiBold';
}

export const TextContainer = styled.Text<TextContainerProps> `
    ${(props) => (props.color ? `color : ${props.color};` : '' )}
    ${(props) => (props.margin ? `margin : ${props.margin};` : '' )}

    padding-top: 3px;
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fontSize};
`