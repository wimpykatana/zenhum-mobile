import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Explore from './screens/Explore';
import Favorite from './screens/Favorite';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';
import Upload from './screens/Upload';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator ({
    Explore:{
        screen: Explore
    },
    Inbox:{
        screen: Inbox
    },
    Upload:{
        screen: Upload
    },
    Favorite:{
        screen: Favorite
    },
    Profile:{
        screen: Profile
    }
})


