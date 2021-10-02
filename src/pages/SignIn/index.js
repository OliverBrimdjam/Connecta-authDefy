import React, { useContext } from 'react';

import AuthContext from '../../context/AuthContext';


const SignIn = () => {

    const auth = useContext(AuthContext);
    console.log(auth);

    return (
        <>
            <h1>SignIn</h1>
        </>
    );
}

export default SignIn;