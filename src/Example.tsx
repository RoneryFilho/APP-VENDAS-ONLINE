import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

interface ExampleProps {
    text?: string; //o ? determina que não é uma propriedade obrigatória de ser passada
    children?: string;
}

const Example = ({children, text}: ExampleProps) => {
    const [newText, setNewText] = useState<any>();

    useEffect(() => {
        console.log('passou aqui');
    }, [newText]);

    const handleOnPress = () => {
        setNewText('NOVO TEXTO');
        console.log('pressionado');
    };

    const resetaTexto = () => {
        setNewText(undefined);
        console.log('reseta texto');
    }

    return (
        <View>
            <Text style={{color: 'blue'}}>{children}</Text>
            <Text style={{color: 'green', fontSize: 30}}>{newText || text}</Text>

            <Button onPress={handleOnPress} title="Botão"/>
            <Button onPress={resetaTexto} title="Botão Reset"/>
        </View>
    )
};

export default Example;