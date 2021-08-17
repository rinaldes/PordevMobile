import React from 'react';
import { ListArticle } from './ListArticle';
import { DetailArticle } from './DetailArticle';

import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

const Article = ({ navigation }) => (
  <Navigator>
    <Screen name="ListArticle" component={ListArticle} options={{ title: "Article" }} navigation={navigation} />
    <Screen name="Post" component={DetailArticle} options={({ route }) => ({ title: route.params.info.item.title.rendered })} />
  </Navigator>
)

export default Article