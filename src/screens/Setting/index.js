import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ListSetting from './listSetting';
import Contact from './contact';

const { Navigator, Screen } = createStackNavigator();

const Setting = ({ navigation }) => {

  return (
    <Navigator>
      <Screen name="ListSetting" component={ListSetting} options={{ title: "Categories" }} navigation={navigation} />
      <Screen name="ContactMe" component={Contact}
        options={({ route }) => ({
          title: "Contact Us"
        })} navigation={navigation}
      />
    </Navigator>
  )
}

export default Setting