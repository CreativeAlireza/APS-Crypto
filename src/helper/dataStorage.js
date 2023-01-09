export function saveData(dataSet, data){
    localStorage.setItem(dataSet, data);
}

export function getData(dataSet){
    return JSON.parse(localStorage.getItem(dataSet));
}