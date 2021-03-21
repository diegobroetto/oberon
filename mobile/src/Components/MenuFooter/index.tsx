import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

import routing from '../../../assets/routing.png';
import navigation from '../../../assets/navigation.png';


export default function MenuFooter(){


    return (

        <View style={style.container}>
            <TouchableOpacity style={style.button}>
               <Image source={routing} />
               <Text style={style.btnText} >Criar Rota</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button}>
               <Image source={navigation} />
               <Text style={style.btnText} >Executar Rota</Text>
            </TouchableOpacity>
        </View>

    );
};

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '10%',
        backgroundColor: '#138D75',
        position: 'absolute',
        marginBottom: '0%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row'
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