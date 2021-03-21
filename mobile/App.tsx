import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';

import Map from './src/Components/Map';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [initialPosition, setInitialPosition] = useState<LocationObject>({} as LocationObject );
  
  const getInitialLocation = useCallback( async () => {
    const { status } = await Location.requestPermissionsAsync();

    if( status !== 'granted' ) {
      setErrorMessage('Permition to access location was denid');
      return;
    }

    const currentLocation = await Location.getCurrentPositionAsync({});

    setInitialPosition(currentLocation);

  }, []);


  useEffect(() => {
    ( async () => {

      await getInitialLocation();

      setIsLoading(false);

    })();
  }, []);

  let text = "waiting...";
  if(errorMessage){
    text = errorMessage;
  }

  return (
    <View style={styles.container}>

        {
          !isLoading ? (<Map region={initialPosition} />) : (<Text>{text}</Text>)
        }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
