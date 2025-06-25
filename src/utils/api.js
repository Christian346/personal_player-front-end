// AIzaSyAuyuThRw5e1oEc5YKJeEMkHA61D1iBfxY; //API KEY

//https://console.cloud.google.com/apis/api/youtube.googleapis.com/credentials?inv=1&invt=Ab0dYA&project=sprint-15-fullstack-app

//YouTube Data API v3 (Official)

export const baseUrl = 

function handleResponse(res){
    return res.ok ? res.json(): Promise.reject(`Error : ${res.status}`);

}

function getVideos(){
    return fetch().then((res)=> handleResponse(res))
}

function addVideo(/*properties needed and a token */){

}

function deleteVideo(/*id and token */){

}


export const getUserInfo = (token)=>{
return fetch(``,{})
}

export const setUserInfo = ({name,imageUrl}, token) =>{
    return fetch(``,{})
}