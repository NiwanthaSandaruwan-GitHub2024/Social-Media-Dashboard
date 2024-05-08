import axios from 'axios';

const API_KEY = 'Here add your twitter API Key';

const getTwitterUserInfo = async (username) => {
    try {
        const response = await axios.get(`https://api.twitter.com/2/users/by/username/${username}`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });

        if (response.status === 200) {
            console.log('API call successful twitter');
            console.log(response.data);
            return response.data;
        } else {
            console.error('API call failed with status:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Error fetching user info:', error);
        return null;
    }
};

const getTwitterTweets = async (username) => {
    try {
        const response = await axios.get(`https://api.twitter.com/2/users/by/username/${username}/tweets`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            },
            params: {
                'tweet.fields': 'text,created_at'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching tweets:', error);
        return null;
    }
};

const getTwitterFollowers = async (username) => {
    try {
        const response = await axios.get(`https://api.twitter.com/2/users/by/username/${username}/followers`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching followers:', error);
        return null;
    }
};

export { getTwitterUserInfo, getTwitterTweets, getTwitterFollowers };
