
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

export function AuthContainer({ children }) {
    return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
        paddingTop: 75,
        alignItems: 'center',
    },

});