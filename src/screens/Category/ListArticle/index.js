import React from 'react';
import { StyleSheet } from 'react-native';
import { useFetch } from '../../../modules';

import { Layout, List } from '@ui-kitten/components';
import { ArticleCard } from '../../../components';

export const ListArticle = ({ navigation, route }) => {
  const { cat_id } = route.params;
  const [posts, addMore] = useFetch("https://www.portaldekave.com/wp-json/wp/v2/posts?_embed&categories=" + cat_id);

  const renderItem = (info) => (
    <ArticleCard status="basic" info={info} navigation={navigation} />
  );

  return (
    <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <List
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={posts}
        renderItem={renderItem}
        onEndReachedThreshold={10}
        onEndReached={addMore}
      />
    </Layout >
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: "100%",
    width: "100%"
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  }
});