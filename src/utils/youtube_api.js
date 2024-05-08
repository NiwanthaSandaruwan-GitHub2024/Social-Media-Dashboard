import axios from 'axios';

const API_KEY = 'AIzaSyA4kDl0ZxQs-1lTO0f45uql8ljss-c485Y';

const getChannelInfo = async (channelId) => {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
            params: {
                part: 'snippet,statistics',
                id: channelId,
                key: API_KEY
            }
        });

        if (response.status === 200) {
            console.log('API call successful');
            console.log(response.data);
            return response.data;
        } else {
            console.error('API call failed with status:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Error fetching channel info:', error);
        return null;
    }
};

const getChannelVideos = async (channelId) => {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                channelId: channelId,
                maxResults: 10,
                type: 'video',
                key: API_KEY
            }
        });
        
        return response.data;
    } catch (error) {
        console.error('Error fetching channel videos:', error);
        return null;
    }
};

const getAllComments = async (videoId) => {
    try {
        let comments = [];
        let nextPageToken = '';

        do {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
                params: {
                    part: 'snippet',
                    videoId: videoId,
                    key: API_KEY,
                    pageToken: nextPageToken
                }
            });

            comments = [...comments, ...response.data.items];
            nextPageToken = response.data.nextPageToken;
        } while (nextPageToken);

        return comments;
    } catch (error) {
        console.error('Error fetching comments:', error);
        return null;
    }
};

export { getChannelInfo, getChannelVideos, getAllComments };
