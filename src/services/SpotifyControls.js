import axios from 'axios';
import { getAuthState } from './SpotifyAuth';

(async () => {
  try {
    const authState = await getAuthState();
    console.log(authState);
    // Do something with authState
  } catch (error) {
    // Handle errors
    console.error('Error getting authState:', error);
  }
})();

/* TODO
  Make a POST with result of authState to spotify to recieve access token.
  https://stackoverflow.com/questions/39887342/how-can-i-get-an-access-token-spotify-api
*/

const pauseSpotify = async () => {
  const apiEndpoint = 'https://api.spotify.com/v1/me/player/pause';

  try {
    const response = await axios.put(apiEndpoint, null, {
      headers: {
        Authorization: `Bearer ${authState.accessToken}`,
      },
    });

    // Handle the response data if needed
    console.log('Spotify API Response:', response.data);
  } catch (error) {
    // Handle errors
    console.error('Error making Spotify API request:', error);
    throw error; // Re-throw the error to let the calling code handle it
  }
};

export default pauseSpotify;
