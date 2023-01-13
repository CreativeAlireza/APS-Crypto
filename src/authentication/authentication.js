import { getUserData } from "../helper/dataStorage.js";

export function userAuth(username, passCode){
    const { userName, password, userId} = getUserData(username);
    if(userName === username &&
        password === passCode) return userId;
    return;
}
