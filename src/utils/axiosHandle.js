import axios from 'axios';

const get = async (url, params) => {
    return await axios.get(url,  {params: params});
}

const post = async (url, data) => {
    return await axios.post(url, data);
}

const getContent = async (url, pageID) => {
    return await get(url, {pageID: pageID});
}

export default getContent;