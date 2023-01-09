import { getData } from "../helper/dataStorage.js";

export function isAuth(data, dataSet){
    const {username, password} = getData(dataSet);
    return data.username === username &&
        data.password === password ?
        true : false;
}
