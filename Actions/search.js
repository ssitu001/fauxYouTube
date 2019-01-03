import axios from 'axios';

export const CHANGE_VIDEO = `CHANGE_VIDEO`;
export const CHANGE_VIDEO_LIST = `CHANGE_VIDEO_LIST`;

export const handleSearch = async (query) => {
  console.log('weury', query)
  const vids = await getVideos(query)
  
  if (vids.status === 200) {
    return vids.data.items;
  } else {
    throw new Error("Oh oh, an error has occured"); 
  }
}

const getVideos = async (query) => {
  try {
    return await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        part: 'snippet',
        key: 'AIzaSyBsALNaHF-N63xWXSSGGKVUHY6doeyCxF8',
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true',
      }
    }) 
  } catch (err) {
    throw new Error(err);
  }
}