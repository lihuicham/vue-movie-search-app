class LocalDB {
    get(key) {
        if(!localStorage.getItem(key)) {
            return false;
        } else {
            return JSON.parse(localStorage.getItem(key));
        }
    }

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

export default LocalDB;