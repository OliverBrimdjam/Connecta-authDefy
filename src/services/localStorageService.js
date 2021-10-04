const localStorageService = {
    set: (key, data) => {
        localStorage.setItem(key, data);
    },
    get: (key) => {
        return localStorage.getItem(key);
    },
}

export default localStorageService;


