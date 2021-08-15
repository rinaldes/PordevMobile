import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Category, Setting, Bookmark } from './src/screens';
import ArticleDetail from './src/screens/Home/ArticleDetail';
import ArticleList from './src/screens/Home/ArticleList';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
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

      <Tab.Screen name="Home" component={HomeStackScreen} options={{ title: "Article" }} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Setting" component={Setting} />

    </Tab.Navigator>
  </NavigationContainer>
);

const HomeStack = createNativeStackNavigator();

function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="ArticleList" component={ArticleList} options={{ title: "Article" }} navigation={navigation} />
      <HomeStack.Screen name="ArticleDetail" component={ArticleDetail} options={{ title: "huha" }} />
    </HomeStack.Navigator>
  );
}

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
);