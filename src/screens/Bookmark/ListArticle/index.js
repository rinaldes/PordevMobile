import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { Layout, List } from '@ui-kitten/components';
import { ArticleCard } from '../../../components';
import { useFetchBookmark } from '../../../modules/useFetch';

export const ListArticle = ({ navigation }) => {
  const [posts, addMore] = useFetchBookmark("https://www.portaldekave.com/wp-json/wp/v2/posts?_embed");

  useEffect(() => {
    addMore();
  });

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