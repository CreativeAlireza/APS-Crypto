export function saveData(dataSet, data){
    localStorage.setItem(dataSet, data);
}

export function getData(dataSet){
    return JSON.parse(localStorage.getItem(dataSet));
}

export function getToken(dataSet){
    return localStorage.getItem(dataSet);
}

export function getAllKeys() {
    return Object.keys(localStorage).filter(el => el !== 'userAccess');
}

