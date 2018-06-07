import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Explore extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{flex: 1}}>
                    <View style={ styles.searchHolder }>
                        <View style={{
                            flexDirection: 'row', padding:10, backgroundColor: 'white', marginHorizontal:20,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'rgba(150,150,150,0.4)'
                        }}>
                            <Icon name='ios-search' size={ 20 } style={{ marginRight: 10, color: 'gray' }}/>
                            <TextInput
                                placeholder='Coba "Cipondoh, Tangerang"'
                                placeholderTextColor='gray'
                                underlineColorAndroid='transparent'
                                style={{
                                    flex: 1,
                                    fontWeight: '700',
                                    backgroundColor: 'white',

                                }}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default Explore;

const styles = StyleSheet.create({
    searchHolder: {
        height: 90,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        paddingTop: 10,
    },
});