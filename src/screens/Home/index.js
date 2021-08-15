import React from 'react';
import { Layout } from '@ui-kitten/components';
import { Article } from '../../components'

const Home = () => (
    <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        <Article />
    </Layout>
)

export default Home;