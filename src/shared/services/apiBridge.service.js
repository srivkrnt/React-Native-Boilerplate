import { REQUEST_METHODS } from '../constants/common.constants'

function isResponseText(contentType) {
    try {
        return contentType.indexOf("application/json;charset=UTF-8") == -1;
    }
    catch(err) {
        return true;
    }
}

function parseJSON(response) {
    try {
        if(response.status === 204 || response.status === 205) {
            return {};
        }
        const contentType = response.response.headers.get("content-type");
        if(response.hasError) {
            return {
                hasError : true,
                response : isResponseText(contentType) ? response.response.text() : response.response.json()
            };
        }
        return isResponseText(contentType) ? response.text() : response.json();
    }
    catch(err){
        throw err;
    }
}

function constructUrlWithParams(url, params = []){
    let parameters = params ? `?${params.join("&")}` : ``;
    const constructedUrl = parameters !== '?' ? `${url}/${parameters}` : url;
    return constructedUrl;
}

function setAuthHeaders(headers){
    return headers;
}

function createRequestOptions(method, headers){
    return {  
        method: method,
        headers: new Headers(headers)
    };
}

function checkStatus(response){
    if(response && response.status >=200 && response.status < 300) {
        return response;
    }
    else {
        return {
            hasError : true,
            response : response,
        }
    }
}

export function makeRequest(method, url, params = [], headers = {}, data = {}){
    headers = setAuthHeaders(headers);
    if (!(data instanceof FormData)) {
        headers["Content-Type"] = "application/json;charset=UTF-8";
    }
    let requestOptions = createRequestOptions(method, headers);
    if(method === REQUEST_METHODS.POST || method === REQUEST_METHODS.PUT || method === REQUEST_METHODS.DELETE) {
        if (data instanceof FormData) {
            requestOptions.body = data;
            delete requestOptions.headers["Content-Type"];
        }
        else {
            requestOptions.body = JSON.stringify(data);
        }
    }
    url = constructUrlWithParams(url, params);
    return fetch(url, requestOptions).then(checkStatus).then(parseJSON);
}