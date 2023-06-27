import { TouchableOpacityProps } from "react-native";
import { ButtonContainer } from "./button.style";
import Text from "../../text/text";
import { Theme } from "../../themes/theme";
import { texTypes } from "../../text/textTypes";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
}

const Button = ({title, margin, ...props}: ButtonProps) => {
    return (<ButtonContainer margin={margin} {...props}>
        <Text type={texTypes.BUTTON_BOLD} color={Theme.colors.blackTheme.black}>{title}</Text>
    </ButtonContainer>);
};

export default Button;