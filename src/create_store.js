export default (storage) => {
    return {
        get: (key, defaultValue = null) => {
            let item = storage.getItem(key);
            try {
                item = JSON.parse(item);
            } catch (e) {
            }
            return item ? item : defaultValue;
        },
        set: (key, value) => {
            if (value instanceof Object || value instanceof Array) {
                value = JSON.stringify(value);
            }
            storage.setItem(key, value);
        },
        remove: (key) => {
            storage.removeItem(key);
        }
    };
}