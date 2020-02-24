import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

// Stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Search'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center',
          gestureEnabled: false
        }}
      >
        <Stack.Screen
          name='Search'
          component={SearchScreen}
          options={{
            title: 'Business Search'
          }}
        />
        <Stack.Screen name='ResultsShow' component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
