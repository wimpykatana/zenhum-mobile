import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Upload extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Upload page</Text>
            </View>
        );
    }
}
export default Upload;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});