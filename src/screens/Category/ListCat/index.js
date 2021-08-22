import React from 'react';
import { Divider, List, ListItem, Text } from '@ui-kitten/components';
import { useFetchCat } from '../../../modules/useFetch';

const ListCat = ({ navigation }) => {
  const [data] = useFetchCat();

  const renderItem = ({ item }) => (
    <ListItem
      title={evaProps => <Text category="h6" style={{ paddingLeft: 15, height: 30, }}>{`${item.name}`}</Text>}
      onPress={() =>
        navigation.navigate('ListArticleCat', {
          cat_id: item.id,
          name: item.name,
        })}
    />
  );

  return (
    <List
      data={data}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
}

export default ListCat;