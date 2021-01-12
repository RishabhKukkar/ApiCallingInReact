
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderIconButton } from '../components/HeaderIconButton';
import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';

export function ProductsListScreen({ navigation }) {
    const { logout } = React.useContext(AuthContext);
    const user = React.useContext(UserContext)
    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => <HeaderIconButton name={'log-out'} onPress={() => {
                logout();
            }} />
        });
    }, [navigation, logout]);
    return <View style={styles.container}>
        <Text>
            Welcome to the Product Listing
        </Text>
        <Text>
            {user.email}
        </Text>
    </View>

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginVertical: 8,
    },
    title: {
        marginBottom: 32
    },
    loginButton: {
        marginVertical: 32
    },
    closeIcon: {
        position: 'absolute',
        top: 32,
        right: 32
    },
});