import { TextInput, TextInputProps } from "react-native";
import { InputContainer } from "./input.style";

interface InputProps extends TextInputProps{

}

const Input = ({...props} : InputProps) => {
    return <InputContainer {...props}/>
}

export default Input;