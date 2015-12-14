import Cookie from "js-cookie";
import createStore from './create_store';

let cookieStorage = Cookie,
	localStorage = createStore(localStorage),
	sessionStorage = createStore(sessionStorage);

export {
	cookieStorage,
    localStorage,
    sessionStorage
}