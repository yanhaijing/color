/**
 * @file 本地存储
 * @author yanhaijing.com
 */

function getLocalStorage(){
    if(typeof window.localStorage === 'object'){
        return localStorage;
    }

    if(typeof window.globalStorage === 'object'){
        return window.globalStorage;
    }
    
    return null;
}

var storage = getLocalStorage();

function get(key) {
    if(storage){                
        return storage.getItem(key);
    }
    
    return null;
}

function set(key, value) {
    storage && storage.setItem(key, value);
}
export {get, set};
