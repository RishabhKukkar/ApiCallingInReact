import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';

import { sleep } from '../utils/sleep';
import { createAction } from '../utils/createAction';
import SecureStorage from 'react-native-secure-storage';
export function useAuth() {
    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case 'SET_USER':
                return {
                    ...state,
                    loading: false,
                    user: { ...action.payload },
                };
            case 'REMOVE_USER':
                return {
                    ...state,
                    user: undefined,
                };

            case 'SET_LOADING':
                return {
                    ...state,
                    loading: action.payload,
                };
            default:
                return state;

        }
    }, {
        user: undefined,
        loading: true,
    })
    const auth = React.useMemo(() => ({
        login: async (email, password) => {
            const { data } = await axios.post(`${BASE_URL}/auth/local`, {
                identifier: email,
                password,
            })
            const user = {
                email: data.user.email,
                token: data.jwt,
            }
            await SecureStorage.setItem('user', JSON.stringify(user));
            dispatch(createAction('SET_USER', user));
            console.log(user);
        },

        logout: async () => {
            await SecureStorage.removeItem('user');
            console.log('Logout');
            dispatch(createAction('REMOVE_USER'));
        },
        register: async (email, password) => {
            await sleep(2000);
            await axios.post(`${BASE_URL}/auth/local/register`, {
                username: email,
                email,
                password,
            })
        },

    }), []);

    React.useEffect(() => {
        sleep(2000).then(() => {
            SecureStorage.getItem('user').then(user => {
                if (user) {
                    dispatch(createAction('SET_USER', JSON.parse(user)));
                } else {
                    dispatch(createAction('SET_LOADING', false));
                }
            });
        });
    }, []);
    return { auth, state };
}