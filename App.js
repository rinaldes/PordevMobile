import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import Category from './src/screens/Category';
import Setting from './src/screens/Setting';
import Bookmark from './src/screens/Bookmark';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused
                ? 'newspaper'
                : 'newspaper-outline';
              break;
            case 'Setting':
              iconName = focused
                ? 'settings'
                : 'settings-outline';
              break;
            case 'Bookmark':
              iconName = focused
                ? 'bookmark'
                : 'bookmark-outline';
              break;
            case 'Category':
              iconName = focused
                ? 'list'
                : 'list-outline';
              break;
            default:
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0b5ed7',
        tabBarInactiveTintColor: 'gray',
      })}>

      <Tab.Screen name="Home" component={Home} options={{ tabBarBadge: 3, title: "Article" }} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Setting" component={Setting} />

    </Tab.Navigator>
  </NavigationContainer>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
);