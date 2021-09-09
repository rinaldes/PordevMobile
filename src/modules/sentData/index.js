import database from '@react-native-firebase/database';

const sentData = async (name, email, message) => {
  database().ref('/feedback').push({
    name: name,
    email: email,
    message: message,
  });
};

export default sentData;