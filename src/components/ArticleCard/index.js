import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import { WebView } from 'react-native-webview';
import moment from 'moment';
import 'moment/locale/id';

const ArticleCard = ({ info = "", status = "basic" }) => (
    <Card style={styles.card}>
        <Image
            style={styles.cover}
            source={{
                uri: info.item._embedded['wp:featuredmedia']['0'].source_url,
            }}
        />
        <Text category='h5'>{info.item.title.rendered}</Text>
        <Text>Di publikasikan {moment(info.item.date).locale('id').fromNow()}</Text>

        <WebView
            style={styles.desc}
            originWhitelist={['*']}
            source={{ html: "<meta name='viewport' content='width=device-width, initial-scale=1'>" + info.item.excerpt.rendered }}
        />
    </Card>
);

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        shadowOffset: { width: 5, height: 5 },
        width: '92.5%',
        borderRadius: 12,
        alignSelf: 'center',
        marginBottom: 12.5,
    },
    cover: {
        width: "100%",
        height: 125,
        borderRadius: 5,
        marginBottom: 10
    },
    desc: {
        marginTop: 5,
        height: 170,
        width: "100%",
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
});

export default ArticleCard;