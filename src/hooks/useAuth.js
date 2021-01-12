import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';

import { sleep } from '../utils/sleep';
import { createAction } from '../utils/createAction';
export function useAuth() {
    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case 'SET_USER':
                return {
                    ...state,
                    user: { ...action.payload },
                };
            case 'REMOVE_USER':
                return {
                    ...state,
                    user: undefined,
                };
            default:
                return state;

        }
    }, {
        user: undefined,
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
            dispatch(createAction('SET_USER', user));
            console.log(user);
        },

        logout: () => {
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
            console.log('register' + ' ' + email + ' ' + password);
        },

    }), []);

    return { auth, state };
}