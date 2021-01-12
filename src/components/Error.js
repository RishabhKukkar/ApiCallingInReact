
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

export function Error({ error }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        paddingVertical: 8,
       
    },
    text: {
        color: 'red',
        fontWeight: 'bold',
    }
});