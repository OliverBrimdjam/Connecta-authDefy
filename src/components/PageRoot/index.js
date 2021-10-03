import React from 'react';
import { PageRootContainer } from './styles';

const PageRoot = ({ children }) => {
    return (
        <PageRootContainer>
            {children}
        </PageRootContainer>
    );
};

export default PageRoot;