import React from 'react';
import { StyleSheet, View } from 'react-native';

const MenuFooter: React.FC = ({ children }) => {
    
    return (
        <View style={style.container}>
            {children}
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
    }
});

export default MenuFooter;