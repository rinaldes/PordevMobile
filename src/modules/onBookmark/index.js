import AsyncStorage from '@react-native-async-storage/async-storage';

const onBookmark = (type, idPost) => {
  console.log(idPost);
  if (type) {
    removeBookMark(idPost)
  } else {
    saveBookMark(idPost)
  }
};

const removeBookMark = async (postId) => {
  console.log(postId);
  try {
    const bookmark = await AsyncStorage.getItem('bookmark').then(
      token => {
        const res = JSON.parse(token);
        return res.filter(e => e !== postId);
      }
    )
    await AsyncStorage.setItem('bookmark', JSON.stringify(bookmark))
    console.log(await AsyncStorage.getItem('bookmark'))
  } catch (e) {
    console.log(e)
  }
};

const saveBookMark = async (postId) => {
  console.log(postId);
  try {
    let bookmark = (await AsyncStorage.getItem('bookmark') == null ? [] : JSON.parse(await AsyncStorage.getItem('bookmark')));
    console.log(bookmark);
    bookmark.push(postId);
    const jsonValue = JSON.stringify(bookmark)
    await AsyncStorage.setItem('bookmark', jsonValue)
    console.log(await AsyncStorage.getItem('bookmark'))
  } catch (e) {
    console.log(e)
  }
};

export default onBookmark;