import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Explore from './screens/Explore';
import Favorite from './screens/Favorite';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';
import Upload from './screens/Upload';

export default createBottomTabNavigator ({
    Explore:{
        screen: Explore,
        navigationOptions:{
            tabBarLabel: 'CARI',
            tabBarIcon:({tintColor}) => (
                <Image source={require('./assets/menuIcon/exploreIcon.png')}
                       style={{ height: 23, width: 28, tintColor: tintColor }}/>
            )
        }
    },
    Inbox:{
        screen: Inbox,
        navigationOptions:{
            tabBarLabel: 'PESAN',
            tabBarIcon:({tintColor}) => (
                <Image source={require('./assets/menuIcon/inboxIcon.png')}
                       style={{ height: 24, width: 32, tintColor: tintColor }}/>
            )
        }
    },
    Upload:{
        screen: Upload,
        navigationOptions:{
            tabBarLabel: 'UPLOAD',
            tabBarIcon:({tintColor}) => (
                <Image source={require('./assets/menuIcon/uploadIcon.png')}
                       style={{ height: 22, width: 22, tintColor: tintColor }}/>
            )
        }
    },
    Favorite:{
        screen: Favorite,
        navigationOptions:{
            tabBarLabel: 'FAVORITE',
            tabBarIcon:({tintColor}) => (
                <Image source={require('./assets/menuIcon/favoriteIcon.png')}
                       style={{ height: 22, width: 25, tintColor: tintColor }}/>
            )
        }
    },
    Profile:{
        screen: Profile,
        navigationOptions:{
            tabBarLabel: 'AKUN SAYA',
            tabBarIcon:({tintColor}) => (
                <Image source={require('./assets/menuIcon/profileIcon.png')}
                       style={{ height: 23, width: 21, tintColor: tintColor }}/>
            )
        }
    }
})

const styles = StyleSheet.create({
    iconExplore: {
        height: 25,
        width: 31
    },
});


