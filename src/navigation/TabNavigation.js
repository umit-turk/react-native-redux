import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TabbarIcon from '../components/TabbarIcon';
import ProfileScreen from '../screens/ProfileScreen';
import I18n from '../i18n/index';
import TaskScreen from '../screens/TaskScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const homeTitle = I18n.t('home');
  const profileTitle = I18n.t('profile');
  const taskTitle = I18n.t('task');
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Root"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <TabbarIcon name="home" />,
          title: homeTitle,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <TabbarIcon name="person-circle-outline" />,
          title: profileTitle,
        }}
      />
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          tabBarIcon: () => <TabbarIcon name="today-outline" />,
          title: taskTitle,
        }}
      />
    </Tab.Navigator>
  );
}
