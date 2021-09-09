import { Linking } from 'react-native';

const sentData = async () => {
  let url = `mailto:hello@portaldekave.com?subject=%5BAsk%5D%20Hallo%2C%20ada%20yang%20ingin%20aku%20sampaikan&body=Hallo%2C%20ada%20yang%20ingin%20aku%20sampaikan.`;

  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    throw new Error('Provided URL can not be handled');
  }

  return Linking.openURL(url);
};

export default sentData;