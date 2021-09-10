import React, { useMemo } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { colors, fonts } from '../../constants';

export default function CustomText({text, style}) {
    const isDarkMode = useSelector(state => state.system.isDarkMode)

    const textStyle = useMemo(() => {
        const styles = {
            fontSize: fonts.f13,
            fontWeight: "600",
            ...style,
            color: isDarkMode ? colors.cFFFFFF : colors.c324c94
        };
        return styles
    }, [style, isDarkMode]);
    return (
            <Text style={textStyle}>{text}</Text>
        
    )
}
