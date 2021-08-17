import {
    Share,
} from 'react-native';

const onShare = async (title, uri) => {
    try {
        const result = await Share.share({
            message: title + " Cek sekarang di " + uri,
            url: uri
        });
    } catch (error) {
        alert(error.message);
    }
};

export default onShare;