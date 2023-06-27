import { TextProps  as TextPropsNative} from "react-native";
import { TextContainer } from "./text.style";
import { useMemo } from "react";
import { texTypes } from "./textTypes";

interface TextProps extends TextPropsNative {
    color?: string;
    type?: string;
}

const Text = ({color, type, ...props}: TextProps) => {

    const handleFontSize = useMemo(() => {
        switch(type){
            case texTypes.TITLE:
                return '32px';
                default:
                    return '16px';
        }
    }, [type]);

    return  <TextContainer fontSize={handleFontSize} color={color} {...props}/>;
}

export default Text;