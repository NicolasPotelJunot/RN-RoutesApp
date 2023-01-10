import React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

export const MapScreen = () => {
  const {height} = useWindowDimensions();
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{height: height - 20}}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
