import { TextInput, TextInputProps, View } from "react-native";
import { InputContainer } from "./input.style";
import { DisplayFlexColumn } from "../globalStyles/globalView.style";
import Text from "../../text/Text";
import { textTypes } from "../../text/textTypes";
import { theme } from "../../themes/theme";

interface InputProps extends TextInputProps{
    title?:string;
}

const Input = ({title, ...props} : InputProps) => {
    return  <DisplayFlexColumn>
        {title && (
            <Text color={theme.colors.grayTheme.gray100} type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}>
                {title}
            </Text>
        )}
                <InputContainer {...props}/>
            </DisplayFlexColumn>
}

export default Input;