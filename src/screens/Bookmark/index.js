import React, { useState, useEffect, useCallback } from 'react';
import { ListArticle } from './ListArticle';
import { DetailArticle } from '../Article/DetailArticle';
import { Button, ButtonGroup } from '@ui-kitten/components';
import { BookmarkIcon, BookmarkIconFilled, ShareIcon } from '../../icons';
import { onBookmark, onShare } from '../../modules'

import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

const Bookmark = ({ navigation }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarkButton, setBookmarkButton] = useState(BookmarkIcon);

  useEffect(() => {
    if (bookmarked) {
      setBookmarkButton(BookmarkIconFilled)
    }
    else {
      setBookmarkButton(BookmarkIcon)
    }
  }, [bookmarked]);

  return (
    <Navigator>
      <Screen name="ListArticle" component={ListArticle} options={{ title: "Saved" }} navigation={navigation} />
      <Screen name="Post" component={DetailArticle}
        options={({ route }) => ({
          title: route.params.info.item.title.rendered,
          headerRight: () => (
            <ButtonGroup appearance='ghost'>
              <Button accessoryLeft={bookmarkButton} onPress={() => {
                setBookmarked(!bookmarked);
                onBookmark(bookmarked, route.params.info.item.id)
              }}></Button>
              <Button accessoryLeft={ShareIcon} onPress={() =>
                onShare(route.params.info.item.title.rendered, route.params.info.item.link)
              }></Button>
            </ButtonGroup>
          )
        })} />
    </Navigator>
  )
}

export default Bookmark