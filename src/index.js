import Cookie from "js-cookie";
import createStore from './create_store';

let cookie = Cookie,
	local = createStore(localStorage),
	session = createStore(sessionStorage);

export {
	cookie,
    local,
    session
}