import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


class Slide extends Component {
    render() {
        return (
            <View style={{width: 160, height: 120, borderWidth: 0.5, borderColor: '#ddd', marginHorizontal: 5}}>
                <View style={{flex:2 }}>
                    <Image source={require('../../assets/static/bedroom57f2399d3b001.png')}
                           style={{ flex:1, width: null, height: null, resizeMode: 'cover'}}/>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 14}}>
                        Ambassade Residences
                    </Text>
                </View>
            </View>
        );
    }
}

export default Slide;