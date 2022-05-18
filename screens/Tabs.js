import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Category from './Category';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="home" style={{fontSize: 30, color: 'black'}} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: () => (
            <Icon
              name="alpha-c-box-outline"
              style={{fontSize: 30, color: 'black'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
