import React from 'react';

import { SubmitButton } from './styles';

const Button = ({ children }) => {
    return (
        <SubmitButton>{children}</SubmitButton>
    );
}

export default Button;