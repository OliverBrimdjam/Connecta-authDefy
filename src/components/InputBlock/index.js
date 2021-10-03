import React from 'react';
import { InputContainer } from './styles';

const InputBlock = (props) => {
    const { name, placeholder, type } = props;
    return (
        <InputContainer>
            <label>{name}</label>
            <input type={type} placeholder={placeholder} />
        </InputContainer>
    );
};

export default InputBlock;