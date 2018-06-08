import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image
} from 'react-native';

import Slide from "../component/__smalComponent/Slide"
import { Font } from 'expo';


class Explore extends Component {

    state = {
        fontLoaded: false,
    };

    componentWillMount(){

        this.startHeaderHeight = 80;
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight;
        }
    }

    async componentDidMount(){
        await Font.loadAsync({
            'catamaran-regular': require('../assets/fonts/Catamaran/Catamaran-Regular.ttf'),
            'catamaran-medium': require('../assets/fonts/Catamaran/Catamaran-Medium.ttf'),
            'catamaran-bold': require('../assets/fonts/Catamaran/Catamaran-Bold.ttf')
        });

        this.setState({ fontLoaded: true });
    }



    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{flex: 1}}>

                    {/*search holder*/}
                    <View style={{ height: this.startHeaderHeight, borderBottomWidth: 1, borderBottomColor: '#ddd', paddingTop:10 }}>
                        <View style={{
                            flexDirection: 'row', padding:10, backgroundColor: 'white', marginHorizontal:20,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'rgba(150,150,150,0.4)',
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon name='ios-search' size={ 20 } style={{ marginRight: 10, color: 'gray' }}/>
                            <TextInput
                                placeholder='Coba "Cipondoh, Tangerang"'
                                placeholderTextColor='gray'
                                underlineColorAndroid='transparent'
                                style={{
                                    flex: 1,
                                    backgroundColor: 'white',
                                    fontSize: 12,
                                }}
                            />
                        </View>
                    </View>

                    {/*scroll view or content*/}
                    <ScrollView scrollEventThrottle = {16} >

                        {
                            this.state.fontLoaded ? (
                                <View style={styles.container}>
                                    <Text style={{ fontFamily: 'catamaran-bold', fontSize: 18, marginHorizontal:10 }}>
                                        Rekomendasi unit
                                    </Text>
                                </View>
                            ) : null
                        }

                        <View style={{ height:120, marginTop:10, marginLeft:5 }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <Slide/>
                                <Slide/>
                                <Slide/>
                            </ScrollView>
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}

export default Explore;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff'
    }
});