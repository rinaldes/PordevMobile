import AsyncStorage from '@react-native-async-storage/async-storage';

const onBookmark = (type, idPost) => {

  if (type) {
    removeBookMark(idPost)
  } else {
    saveBookMark(idPost)
  }
};

const removeBookMark = async (postId) => {
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
  try {
    let bookmark = JSON.parse(await AsyncStorage.getItem('bookmark'));
    bookmark.push(postId);
    const jsonValue = JSON.stringify(bookmark)
    await AsyncStorage.setItem('bookmark', jsonValue)
    console.log(await AsyncStorage.getItem('bookmark'))
  } catch (e) {
    console.log(e)
  }
};

export const alreadyBookmark = async (postId) => {
  try {
    const bookmarks = await AsyncStorage.getItem('bookmark').then(
      token => {
        const res = JSON.parse(token);
        return res.filter(e => e === postId);
      }
    )
    if (JSON.parse(bookmarks).length === 0)
      return false;
    else
      return true;
  } catch (e) {
    console.log(e)
  }
};

export default onBookmark;