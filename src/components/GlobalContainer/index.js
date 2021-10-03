import React from 'react';
import { GlobalContainerElement } from './styles';

const GlobalContainer = ({ children }) => {
    return (
        <GlobalContainerElement>
            {children}
        </GlobalContainerElement>
    );
};

export default GlobalContainer;