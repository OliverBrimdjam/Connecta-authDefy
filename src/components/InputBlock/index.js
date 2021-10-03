import React, { useEffect, useRef } from 'react';
import { InputContainer } from './styles';
import { useField } from '@unform/core';

const InputBlock = (props) => {
    const { name, placeholder, type, labelContent } = props;
    const inputRef = useRef(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <InputContainer>
            <label>{labelContent}</label>
            <input name={name} ref={inputRef} type={type} placeholder={placeholder} />
        </InputContainer>
    );
};

export default InputBlock;