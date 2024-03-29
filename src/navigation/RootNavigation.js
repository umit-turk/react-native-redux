import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import {useSelector} from 'react-redux';
import HomeScreen from './TabNavigation';

export const AppScreens = {
  login: 'Login',
  home: 'Home',
};

const Stack = createStackNavigator();

export default function StackNavigator() {
  const isLogin = useSelector(state => state.system.isLogin);

  const initialRouteName = isLogin ? AppScreens.home : AppScreens.login;

  return (
    <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{headerShown: false}}>
      {isLogin === false ? (
        <Stack.Screen
          name={AppScreens.login}
          component={LoginScreen}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name={AppScreens.home}
          component={HomeScreen}
          options={{title: 'Anasayfa'}}
        />
      )}
    </Stack.Navigator>
  );
}
