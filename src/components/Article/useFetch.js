import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

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
            getItems(pages);
            setPages((pages) => pages + 1);
            setAddMore(false);
        }
    }, [data, addMore]);

    return [data, fetchMore];
}

export default useFetch;