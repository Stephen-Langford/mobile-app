import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { imageData } from '../../assets/images';

import { AuthSession } from 'expo';
console.log(AuthSession.getRedirectUrl());
console.log(Linking.makeUrl());
//importing player functionality for testing
import pauseSpotify from '../services/SpotifyControls'; // Import the function containing the logic
const handlePauseButtonPress = async () => {
  try {
    await pauseSpotify();
    // Additional logic after pausing Spotify if needed
  } catch (error) {
    console.error('Error handling pause button press:', error);
  }
};

const HomeScreen = ({ navigation }) => {
  const logo = imageData.filter((image) => {
    return image.id === '1';
  })[0];

  return (
    <View>
      <Image
        style={{ flex: 1, aspectRatio: 3, resizeMode: 'contain' }}
        source={logo.imageLink}
      />
      <Button title="Pause Spotify" onPress={handlePauseButtonPress} />
    </View>
  );
};

export default HomeScreen;
