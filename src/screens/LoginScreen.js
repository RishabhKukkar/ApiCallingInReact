
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContainer } from '../components/AuthContainer';
import { Error } from '../components/Error';
import { FilledButton } from '../components/FilledButton';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { Loading } from '../components/Loading';
import { TextButton } from '../components/TextButton';
import { AuthContext } from '../context/AuthContext';
export function LoginScreen({ navigation }) {
    const { login } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('rishabhkukkar@gmail.com');
    const [password, setPassword] = React.useState('kukkar');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    return (
        <AuthContainer style={styles.container}>
            <Heading style={styles.title}>Login</Heading>
            <Error error={error} />
            <Input style={styles.input} placeholder={'Email'} keyboardType={'email-address'} value={email} onChangeText={setEmail} />
            <Input style={styles.input} placeholder={'Password'} secureTextEntry value={password} onChangeText={setPassword} />
            <FilledButton
                title={'Login'}
                style={styles.loginButton}
                onPress={async () => {
                    try {
                        setLoading(true);
                        await login(email, password);;
                        // navigation.pop();
                    } catch (e) {
                        setError(e.message);
                        setLoading(false);
                    }

                }} />
            <TextButton
                title={'Dont have an account ? Create One'}
                onPress={() => {
                    navigation.navigate('Registration');
                }} />
            <Loading loading={loading} />
        </AuthContainer>);
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
});