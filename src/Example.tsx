import { Text, View } from "react-native";

interface ExampleProps {
    text?: string; //o ? determina que não é uma propriedade obrigatória de ser passada
    children?: string;
}

const Example = ({children, text}: ExampleProps) => {
    return (
        <View>
            <Text style={{color: 'blue'}}>{children}</Text>
            <Text style={{color: 'green'}}>{text}</Text>
        </View>
    )
};

export default Example;