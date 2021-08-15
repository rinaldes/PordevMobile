import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { List, Button } from '@ui-kitten/components';
import useFetch from './useFetch';
import ArticleCard from '../ArticleCard';

const Article = ({ navigation }) => {
    const [posts, addMore] = useFetch("https://www.portaldekave.com/wp-json/wp/v2/posts?_embed");

    const renderItem = (info) => (
        <ArticleCard status="basic" info={info} navigation={navigation} />
    );

    return (
        <List
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            data={posts}
            renderItem={renderItem}
            onEndReachedThreshold={10}
            onEndReached={addMore}
        />
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

export default Article;