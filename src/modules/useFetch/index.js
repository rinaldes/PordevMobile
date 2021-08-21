import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useFetch = (url) => {
  const [pages, setPages] = useState(1);
  const [addMore, setAddMore] = useState(true);
  const [data, setData] = useState([]);

  const fetchMore = useCallback(() => setAddMore(true), []);

  const getItems = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await axios.get(url + `&page=${pages}&per_page=10`)
      .then(resp => {
        setData([...data, ...resp.data])
      });
  }

  useEffect(() => {
    if (addMore) {
      getItems();
      setPages((pages) => pages + 1);
      setAddMore(false);
    }
  }, [data, addMore]);

  return [data, fetchMore];
}

export const useFetchBookmark = (url) => {
  const [pages, setPages] = useState(1);
  const [addMore, setAddMore] = useState(true);
  const [data, setData] = useState([]);

  const fetchMore = useCallback(() => setAddMore(true), []);

  const getItems = async () => {
    let bookmark = await AsyncStorage.getItem('bookmark').then(token => {
      const res = JSON.parse(token);
      if (res != null) {
        const result = res.map(post_id => {
          return 'include[]=' + post_id;
        });
        return result.join('&');
      } else {
        return null;
      }
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await axios.get(url + "&" + bookmark)
      .then(resp => {
        setData([...resp.data])
      });
  }

  useEffect(() => {
    if (addMore) {
      getItems();
      setAddMore(false);
    }
  }, [data, addMore]);

  return [data, fetchMore];
}


export default useFetch;