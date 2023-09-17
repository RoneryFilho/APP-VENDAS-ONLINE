import { TextInputProps } from "react-native";

import Text from "../../text/Text";
import { textTypes } from "../../text/textTypes";
import { theme } from "../../themes/theme";
import { DisplayFlexColumn } from "../globalStyles/globalView.style";
import { InputContainer } from "./input.style";

interface InputProps extends TextInputProps{
    title?:string;
}

const Input = ({title, ...props} : InputProps) => {
    return  <DisplayFlexColumn>
        {title && (
            <Text margin="0px 0px 4px 4px" color={theme.colors.neutralTheme.black} type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}>
                {title}
            </Text>
        )}
                <InputContainer {...props}/>
            </DisplayFlexColumn>
}

export default Input;