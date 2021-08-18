import React from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Article, Category, Bookmark, Setting } from './screens';
import { ArticleIcon, BookmarkIcon, CategoryIcon, SettingIcon } from './icons'
const { Navigator, Screen } = createBottomTabNavigator();

export const HomeScreen = () => (
  <Navigator screenOptions={{ headerShown: false }} tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Article' component={Article} />
    <Screen name='Category' component={Category} />
    <Screen name='Bookmark' component={Bookmark} />
    <Screen name='Setting' component={Setting} />
  </Navigator>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Article' icon={ArticleIcon} />
    <BottomNavigationTab title='Category' icon={CategoryIcon} />
    <BottomNavigationTab title='Bookmark' icon={BookmarkIcon} />
    <BottomNavigationTab title='Setting' icon={SettingIcon} />
  </BottomNavigation>
);