import React, { createContext, useCallback } from 'react';
import apiAbstraction from '../services/apiAbstraction';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const signIn = useCallback(async ({ email, password }) => {
        console.log(email);
        const response = await apiAbstraction.post(email, password);

        console.log(response);
    }, []);

    return (
        <AuthContext.Provider value={{ name: 'diego', signIn }}>
            {children}
        </AuthContext.Provider>
    );

};
