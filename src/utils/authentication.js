//2 request
import {baseUrl} from "./api"

//the first a function that sends the email and password and it gives back an authorization token that i will save in the front
//and ill have to save it on local storage
export const logIn = (email, password) => {
    return fetch(`${baseUrl}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }), //{password: "jsmith@yahoo.com, email: 12345"}
    }).then((res) => handleResponse(res));



  // return new Promise((resolve, reject) => {
  //   resolve({ token: "some token" });
  // });
};

export const registerUser = ({ email, password, name, avatarImg }) => {
  return fetch("http://localhost:3001/signup", {
    // this has to point to the backend
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
      avatarImg: avatarImg,
    }),
  });
};
