import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Layout, Button, Modal, Card, Text } from '@ui-kitten/components';
import { sentData } from '../../modules';

const Contact = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [visible, setVisible] = useState(false);

  const feedBack = () => {
    sentData(email, name, msg)
    setVisible(true)
    setName('')
    setEmail('')
    setMsg('')
  }

  return (
    <Layout style={styles.container}>
      <Input
        value={email}
        style={styles.input}
        label='E-Mail'
        placeholder='Masukan emailmu..'
        onChangeText={nextValue => setEmail(nextValue)}
      />
      <Input
        value={name}
        style={styles.input}
        label='Name'
        placeholder='Masukan namamu..'
        onChangeText={nextValue => setName(nextValue)}
      />
      <Input
        value={msg}
        style={styles.input}
        textStyle={{ minHeight: 100, textAlignVertical: 'top', paddingVertical: 7 }}
        label='Message'
        placeholder='Masukan pesanmu..'
        multiline={true}
        onChangeText={nextValue => setMsg(nextValue)}
      />
      <Button onPress={e => feedBack()} style={{ marginVertical: 10 }}>
        Send Message
      </Button>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text style={{ marginBottom: 25 }} category='h6'>Pesanmu sudah kami terima!</Text>
          <Button onPress={() => setVisible(false)}>
            Tutup
          </Button>
        </Card>
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 5,
  },
  container: {
    minHeight: "100%",
    width: "100%",
    paddingHorizontal: "5%",
    paddingVertical: "2.5%"
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Contact;