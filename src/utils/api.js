import avatarImg from "../assets/user.jpg";

export const baseUrl = function handleResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error : ${res.status}`);
};

export function addVideo(video) {
return new Promise((resolve, reject)=>{
  resolve({
    ...video, // which unpacks all properties for videos allowing to have the full object,
    _id: new Date(), // simulate a random id
  })
})
}

export function deleteVideo(id) {
 return new Promise((resolve, reject)=>{
  resolve({
    message:`this ${id} was deleted succesfully`
  })
 })
}

export const getUserInfo = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      email: "user@hotmail.com",
      avatar: avatarImg,
      name: "some username",
    }); // avoid using password in the response from the backend  // this is a pretend backend response
  });
  // return fetch(``, {});
};

export const setUserInfo = ({ name, imageUrl }, token) => {
  return fetch(``, {});
};

//2 request

//the first a function that sends the email and password and it gives back an authorization token that i will save in the front
//and ill have to save it on local storage
export const logIn = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "some token" });
  });
};


export const RegisterUser = ({email, password, name, avatarImg}) => {
  return fetch('http://localhost:3001/users',{ // this has to point to the backend 
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({
      email: email,
      password: password,
      name:name,
      avatarImg:avatarImg
    })
  })
}
