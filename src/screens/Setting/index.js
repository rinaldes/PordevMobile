import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ListSetting from './listSetting';

const { Navigator, Screen } = createStackNavigator();

const Setting = ({ navigation }) => {

  return (
    <Navigator>
      <Screen name="ListSetting" component={ListSetting} options={{ title: "Categories" }} navigation={navigation} />
    </Navigator>
  )
}

export default Setting