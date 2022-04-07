import React from "react"
import { View } from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";

interface SeparatorProps {
    color?: string;
}

export const Separator: React.FunctionComponent<SeparatorProps> = ({
    color = "red",
}) => {
    return <View
    style = {{
            height: 1,
            width: "100%",
            backgroundColor: color,
            marginTop: 10,
            marginBottom:10,
    }
     }/>;
};

