import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import RootNavigation from './RootNavigation'

export default function Navigation(){

    const barStyle = "light-content"

    return (
        <NavigationContainer>
            <StatusBar barStyle={barStyle} backgroundColor={'black'} />
            <RootNavigation />
        </NavigationContainer>
    )
}