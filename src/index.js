import React from 'react';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Article, Category, Bookmark, Setting } from './screens';

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

const ArticleIcon = (props) => (
  <Icon {...props} name='file-text-outline' />
);

const CategoryIcon = (props) => (
  <Icon {...props} name='list-outline' />
);

const BookmarkIcon = (props) => (
  <Icon {...props} name='bookmark-outline' />
);

const SettingIcon = (props) => (
  <Icon {...props} name='settings-outline' />
);