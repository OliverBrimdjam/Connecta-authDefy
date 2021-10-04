const apiAbstraction = {
    lsStartConfig: () => {
        apiAbstraction.lsSet('storedEmail', 'teste@teste.com');
        apiAbstraction.lsSet('storedPassword', '123456');
        apiAbstraction.lsSet('storedToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaWF0IjoxNTE2MjN9.6ekQ_5WSVSPf2wxW1qmSmJrdJ6t9rwspo5wRnl3eGC8');
    },
    lsSet: (key, data) => {
        localStorage.setItem(key, data);
    },
    lsGet: (key) => {
        return localStorage.getItem(key);
    },
    post: (email, password) => {
        const storedEmail = apiAbstraction.lsGet('storedEmail');
        const storedPassword = apiAbstraction.lsGet('storedPassword');

        if (email === storedEmail && password === storedPassword) {
            const storedToken = apiAbstraction.lsGet('storedToken');
            return storedToken;
        } else {
            alert('E-mail e/ou senha não cadastrado');

            return null;
        }
    }
}

export default apiAbstraction;


