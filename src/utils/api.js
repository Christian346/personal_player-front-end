// import avatarImg from "../assets/user.jpg";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "the-site-deployed" //"https://api.chris-wtwr.minecraftnoob.com"
    : "http://localhost:3001";

export function handleResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error : ${res.status}`);
}

export function getVideos() {
  return fetch(`${baseUrl}/videos`) //returns are for using the .then()
    .then((res) => handleResponse(res));
}

export function addVideo(videoObject, token) {
  return fetch(`${baseUrl}/videos`, {
    // add authorization: "Bearer token 'embed token in template literal' "
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify(
      //{
      videoObject
      //id, //it's making the about key value the same as the description property
      /*}*/
    ), //accepts an obj as argument and turns into string json formatted.
  }).then((res) => handleResponse(res));
}

// return new Promise((resolve, reject)=>{
//   resolve({
//     ...video, // which unpacks all properties for videos allowing to have the full object,
//     _id: new Date(), // simulate a random id
//   })
// })

export function deleteVideo(id, token) {
  return fetch(`${baseUrl}/videos/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
    method: "DELETE",
  }).then((res) => handleResponse(res));

  // return new Promise((resolve, reject) => {
  //   resolve({
  //     message: `this ${id} was deleted succesfully`,
  //   });
  // });
}

export const getUserInfo = (token) => {
  // Send a GET request to /users/me
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Specify an authorization header with an appropriately
      // formatted value.
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => handleResponse(res));

  // return new Promise((resolve, reject) => {
  //   resolve({
  //     email: "user@hotmail.com",
  //     avatar: avatarImg,
  //     name: "some username",
  //   }); // avoid using password in the response from the backend  // this is a pretend backend response
  // });
  // return fetch(``, {});
};

export const setUserInfo = ({ name, imageUrl }, token) => {
  // Send a GET request to /users/me
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Specify an authorization header with an appropriately
      // formatted value.
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
    }),
  }).then((res) => handleResponse(res));
};
