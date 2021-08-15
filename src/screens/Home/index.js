import React from 'react';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

const Home = ({ navigation }) => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="ArticleList" component={ArticleList} options={{ title: "Article" }} navigation={navigation} />
        <HomeStack.Screen name="ArticleDetails" component={ArticleDetail} options={{ title: " " }} />
    </HomeStack.Navigator>
)

export default Home;