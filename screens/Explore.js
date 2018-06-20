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
    Dimensions,
    Image
} from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class Explore extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
            mapRegion: null ,
            hasLocationPermissions: false,
            locationResult: null

        };
    }

    componentDidMount() {
        this._getLocationAsync();
    }



    _handleMapRegionChange = mapRegion => {
        // console.log(mapRegion);
        this.setState({ mapRegion });
    };

    //get location
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
            });
        } else {
            this.setState({ hasLocationPermissions: true });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location) });

        // Center the map on the location we just fetched.
        this.setState({mapRegion: {
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                            latitudeDelta: 0.0922, longitudeDelta: LONGITUDE_DELTA }});

        // console.log(this.state.mapRegion.latitude +" "+ this.state.mapRegion.latitude)
    };


    componentWillMount(){

        this.startHeaderHeight = 80;
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight;
        }
    }



    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>

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


                    {
                        this.state.locationResult === null ?
                            <Text>Finding your current location...</Text> :
                            this.state.hasLocationPermissions === false ?
                                <Text>Location permissions are not granted.</Text> :
                                this.state.mapRegion === null ?
                                    <Text>Map region doesn't exist.</Text> :
                                    <MapView
                                        style={{ flex: 1 }}
                                        initialRegion={this.state.mapRegion}
                                        onRegionChange={this._handleMapRegionChange}
                                    >
                                        <MapView.Marker
                                            draggable
                                            coordinate={
                                                {
                                                    "latitude": -6.192764,
                                                    "latitudeDelta": 0.09219999999824324,
                                                    "longitude": 106.655359,
                                                    "longitudeDelta": 0.07365126231377417,
                                                }
                                            }
                                            title="Rumah Ini Di Jual"
                                            description="Harga 20juta"
                                        />

                                        <MapView.Marker
                                            draggable
                                            coordinate={
                                                {
                                                    "latitude": -6.193671,
                                                    "latitudeDelta": 0.09219999999824324,
                                                    "longitude": 106.652666,
                                                    "longitudeDelta": 0.07365126231377417,
                                                }
                                            }
                                            title="Rumah Ini Di jual"
                                            description="Harga 10juta"
                                        />
                                    </MapView>
                    }
                </View>
            </SafeAreaView>
        );
    }
}

export default Explore;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    }
});