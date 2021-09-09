import React from 'react';
import { IndexPath, Menu, MenuItem, Toggle } from '@ui-kitten/components';
import { DarkIcon, PhoneIcon } from '../../icons';

const ListSetting = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  return (
    <Menu
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <MenuItem title='Dark Mode' accessoryLeft={DarkIcon} accessoryRight={
        <Toggle
          disabled={true}>
        </Toggle>
      } />
      <MenuItem title='Contact Us' accessoryLeft={PhoneIcon}
        onPress={() => navigation.navigate('ContactMe')}
      />
    </Menu>
  )
}

export default ListSetting;