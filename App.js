import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './screens/Tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReviewDetails from './screens/ReviewDetails';
import Category from './screens/Category';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Details" component={ReviewDetails} />
        <Stack.Screen name="Category" component={Category} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
