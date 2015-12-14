"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (storage) {
    return {
        get: function get(key) {
            var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

            var item = storage.getItem(key);
            try {
                item = JSON.parse(item);
            } catch (e) {}
            return item ? item : defaultValue;
        },
        set: function set(key, value) {
            if (value instanceof Object || value instanceof Array) {
                value = JSON.stringify(value);
            }
            storage.setItem(key, value);
        },
        remove: function remove(key) {
            storage.removeItem(key);
        }
    };
};