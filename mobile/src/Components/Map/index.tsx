import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { LocationObject } from 'expo-location';

import api from '../../services/api';

import routing from '../../../assets/routing.png';
import navigation from '../../../assets/navigation.png';
import pin from '../../../assets/pin.png';

import MenuFooter from '../MenuFooter';

interface MapProps {
    region: LocationObject
}

interface ICoords {
    lat: number;
    lng: number;
    id: string;
}

export default function Map( { region }: MapProps ) {
    const [position, setPosition] = useState<ICoords[]>([]);
    const [zoom, setZoom] = useState<number>(30);

    const handleGetLocation = useCallback( async () => {
        try {
            const response = await api.get('/location');        
            setPosition(response.data);
            setZoom(0.004);
        } catch (error) {
            console.error(error);
            return;
        }
        
        console.log(position);
    }, []);

    
    return (

        <View style={styles.container}>
            <MapView
                region={{
                    latitude: region.coords.latitude,
                    longitude: region.coords.longitude,
                    latitudeDelta: zoom,
                    longitudeDelta: zoom
                }}
                initialRegion={{
                    latitude: region.coords.latitude,
                    longitude: region.coords.longitude,
                    latitudeDelta: zoom,
                    longitudeDelta: zoom
                }}
                style={styles.map}
                
            >
                {
                    position.map( coords => (
                        <Marker
                        key={coords.id}
                        image={pin}
                        coordinate={{
                            latitude: coords.lat,
                            longitude: coords.lng
                        }}
                        anchor={{ 
                            x: 30,
                            y: 25
                         }}
                        />
                    ))
                    
                }
            </MapView>
            <MenuFooter>

                <TouchableOpacity style={styles.button} onPress={handleGetLocation}>
                    <Image source={routing} />
                    <Text style={styles.btnText} >Criar Rota</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image source={navigation} />
                    <Text style={styles.btnText} >Executar Rota</Text>
                </TouchableOpacity>

            </MenuFooter>
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
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 10,
        color: '#EAEAEA'
    }
  });