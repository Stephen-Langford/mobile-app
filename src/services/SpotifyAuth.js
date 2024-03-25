// SpotifyAuth.js
import { authorize } from 'react-native-app-auth';

export const getAuthState = async () => {
  const config = {
    clientId: '90b8180647d84609baaaefc3dd9aa8ea',
    clientSecret: 'cd976606a10146f8aace70ac5e3b58f4',
    redirectUrl: 'com.myapp:/oauth',
    scopes: [
      'user-read-email',
      'playlist-modify-public',
      'user-read-private',
      'app-remote-control',
      'user-modify-playback-state',
    ],
    serviceConfiguration: {
      authorizationEndpoint: 'https:/accounts.spotify.com/authorize',
      tokenEndpoint: 'https:/accounts.spotify.com/api/token',
    },
  };

  try {
    const authState = await authorize(config);
    console.log('Authentication successful:', authState);
    return authState;
  } catch (error) {
    console.error('Authentication error:', error);
    throw error; // Re-throw the error to let the calling code handle it
  }
};
