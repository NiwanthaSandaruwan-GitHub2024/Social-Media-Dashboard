import axios from 'axios';

const BASE_URL = 'https://graph.instagram.com';

export const fetchUserProfile = async (accessToken) => {
  try {
    const response = await axios.get(`${BASE_URL}/me`, {
      params: {
        fields: 'username,bio',
        access_token: accessToken,
      },
    });
    const profileData = response.data;
    console.log('User Profile:', profileData);
    return profileData;
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
};
