import React from 'react';
import { Layout } from '@ui-kitten/components';
import { Article } from '../../components'

const ArticleList = ({ navigation }) => (
    <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        <Article navigation={navigation} />
    </Layout>
)

export default ArticleList;