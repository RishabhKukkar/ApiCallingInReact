import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Error } from '../components/Error';
import { FilledButton } from '../components/FilledButton';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { IconButton } from '../components/IconButton';
import { TextButton } from '../components/TextButton';
import { AuthContainer } from '../components/AuthContainer';
import { AuthContext } from '../context/AuthContext';
import { Loading } from '../components/Loading';

export function RegistrationScreen({ navigation }) {
    const { register } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('rishabhkukkar@gmail.com');
    const [password, setPassword] = React.useState('kukkar');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    return (
        <AuthContainer >

            <IconButton
                name={'close-circle-outline'}
                style={styles.closeIcon}
                onPress={() => {
                    navigation.pop();
                }} />
            <Heading
                style={styles.title}>
                Registration
                </Heading>
            <Error
                error={error} />
            <Input
                style={styles.input}
                placeholder={'Email'}
                keyboardType={'email-address'}
                value={email}
                onChangeText={setEmail} />
            <Input
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry
                value={password}
                onChangeText={setPassword} />
            <FilledButton
                title={'Register'}
                style={styles.loginButton}
                onPress={async () => {
                    try {
                        setLoading(true);
                        await register(email, password);
                        navigation.pop();
                    } catch (e) {
                        setError(e.message);
                        setLoading(false);
                        console.log('Rishabh', e);
                    }
                }} />
            <Loading loading={loading} />

        </AuthContainer>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        paddingTop: 75,
        alignItems: 'center',
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