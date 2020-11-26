import { Use } from "react-native-svg";

class UserService {
    _token = null;
    _userId = null;
    _userEmail = null;
    _roleId = null;

    constructor(){}

    setBearerToken(token){
        this._token = token;
        if(val) {
            const tokenData = parseBearerToken(token);
            this._userId = tokenData.userId;
            this._userEmail = tokenData.userEmail;
            this._roleId = tokenData.roleId;
        }
    }

    setToken(token) {
        this._token = token;
    }

    getToken() {
        return this._token;
    }

    setUserId(userId) {
        this._userId = userId;
    }

    getUserId(userId) {
        return this._userId;
    }

    setUserEmail(userEmail) {
        this._userEmail = userEmail;
    }

    getUserEmail(){
        return this._userEmail;
    }

    setRoleId(roleId){
        this._roleId = roleId;
    }

    getRoleId(){
        return this._roleId;
    }
}

export let userService = new UserService();