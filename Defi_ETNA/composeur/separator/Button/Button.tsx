import React from 'react'
import { Text, View } from 'react-native'

interface buttonProps {
    children: string;
    
}

export const button: React.FunctionComponent<buttonProps> = ({ children }) => {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
};


