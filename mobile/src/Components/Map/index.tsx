import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native'
import MapView from 'react-native-maps';
import { LocationObject } from 'expo-location';

import MenuFooter from '../MenuFooter';

interface MapProps {
    region: LocationObject
}

export default function Map( { region }: MapProps ) {       
    return (

        <View style={styles.container}>
            <MapView
                region={{
                    latitude: region.coords.latitude,
                    longitude: region.coords.longitude,
                    latitudeDelta: 30,
                    longitudeDelta: 30
                }}
                initialRegion={{
                    latitude: region.coords.latitude,
                    longitude: region.coords.longitude,
                    latitudeDelta: 30,
                    longitudeDelta: 30
                }}
                style={styles.map}
            ></MapView>
            <MenuFooter />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column-reverse'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
  });