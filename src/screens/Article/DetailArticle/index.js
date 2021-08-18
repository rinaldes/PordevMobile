import React from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import AutoHeightWebView from 'react-native-autoheight-webview'
import moment from 'moment';
import 'moment/locale/id';

export const DetailArticle = ({ route, navigation }) => {
  const { info } = route.params;

  return (
    <ScrollView>
      <Card>
        <Text category='h5'>{info.item.title.rendered}</Text>
        <Text>Di publikasikan {moment(info.item.date).locale('id').fromNow()}</Text>
        <AutoHeightWebView
          style={{ width: Dimensions.get('window').width - 15, marginTop: 35 }}
          customStyle={`
                    * {
                        font-family: 'Times New Roman';
                    }
                    p {
                        font-size: 16px;
                        width: 90%;
                    }
                    img {
                        width: 90% !important;
                        height: auto !important;
                    }
                    `}
          files={[{
            href: 'cssfileaddress',
            type: 'text/css',
            rel: 'stylesheet'
          }]}
          source={{ html: "<meta name='viewport' content='width=device-width, initial-scale=1'>" + info.item.content.rendered }}
          viewportContent={'width=device-width, user-scalable=no'}
        />
      </Card>
    </ScrollView>
  )
};