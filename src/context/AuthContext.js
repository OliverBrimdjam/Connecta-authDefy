import React, { createContext, useCallback, useState } from 'react';
import apiAbstraction from '../services/apiAbstraction';
import localStorageService from '../services/localStorageService';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');

    const signIn = useCallback(async ({ email, password }) => {
        const response = await apiAbstraction.post(email, password);

        localStorageService.set('lsToken', response);
        setToken(response);
    }, []);

    return (
        <AuthContext.Provider value={{ token: token, signIn }}>
            {children}
        </AuthContext.Provider>
    );

};
