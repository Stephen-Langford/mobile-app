import { Text, View } from 'react-native';
import React, { Component } from 'react';

import Station from '../components/Station';

export class StationsScreen extends Component {
  render() {
    return (
      <View>
        <Station />
        <Station />
        <Station />
      </View>
    );
  }
}

export default StationsScreen;
