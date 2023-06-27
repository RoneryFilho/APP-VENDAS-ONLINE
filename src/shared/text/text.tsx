import { TextProps  as TextPropsNative} from "react-native";
import { TextContainer } from "./text.style";
import { useMemo } from "react";
import { texTypes } from "./textTypes";

interface TextProps extends TextPropsNative {
    color?: string;
    type?: string;
}

const Text = ({color, type, ...props}: TextProps) => {

    const fontSize = useMemo(() => {
        switch(type){
            case texTypes.TITLE_BOLD:
            case texTypes.TITLE_REGULAR:
            case texTypes.TITLE_LIGHT:
                return '24px';
            case texTypes.SUB_TITLE_BOLD:
            case texTypes.SUB_TITLE_REGULAR:
            case texTypes.SUB_TITLE_LIGHT:
                return '20px';
            case texTypes.BUTTON_BOLD:
            case texTypes.BUTTON_REGULAR:
            case texTypes.BUTTON_LIGHT:
                return '18px';
            case texTypes.PARAGRAPH_SMALL_BOLD:
            case texTypes.PARAGRAPH_SMALL_REGULAR:
            case texTypes.PARAGRAPH_SMALL_LIGHT:
                return '10px';
            case texTypes.PARAGRAPH_BOLD:
            case texTypes.PARAGRAPH_REGULAR:
            case texTypes.PARAGRAPH_LIGHT:
                default:
                    return '14px';
        }
    }, [type]);

    const fontFamily = useMemo(() => {
        switch(type) {
            case texTypes.TITLE_BOLD:
            case texTypes.SUB_TITLE_BOLD:
            case texTypes.PARAGRAPH_SMALL_BOLD:
            case texTypes.PARAGRAPH_BOLD:
            case texTypes.BUTTON_BOLD:
                return 'Poppins-Bold';
            case texTypes.TITLE_LIGHT:
            case texTypes.SUB_TITLE_LIGHT:
            case texTypes.PARAGRAPH_SMALL_LIGHT:
            case texTypes.PARAGRAPH_LIGHT:
            case texTypes.BUTTON_LIGHT:
                return 'Poppins-Light'; 
            case texTypes.TITLE_REGULAR:
            case texTypes.SUB_TITLE_REGULAR:
            case texTypes.PARAGRAPH_SMALL_REGULAR:
            case texTypes.PARAGRAPH_REGULAR:
            case texTypes.BUTTON_REGULAR:    
            default:
                return 'Poppins-Regular';

        }
    }, [type]);

    return  <TextContainer fontFamily={fontFamily} fontSize={fontSize} color={color} {...props}/>;
}

export default Text;