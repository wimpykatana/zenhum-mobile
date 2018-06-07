import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Explore extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Explore page</Text>
            </View>
        );
    }
}

export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});