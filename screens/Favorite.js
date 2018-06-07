import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Favorite extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Favorite page</Text>
            </View>
        );
    }
}

export default Favorite;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});