// AIzaSyAuyuThRw5e1oEc5YKJeEMkHA61D1iBfxY; //API KEY

//https://console.cloud.google.com/apis/api/youtube.googleapis.com/credentials?inv=1&invt=Ab0dYA&project=sprint-15-fullstack-app

//YouTube Data API v3 (Official)

function getVideos(searchTerm) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=6&key=AIzaSyAuyuThRw5e1oEc5YKJeEMkHA61D1iBfxY`
  ).then((data)=>{
    console.log(data)
    return data.json();
  }
  )
  
  // return fetch(
  //   "https://content-youtube.googleapis.com/youtube/v3/search?0=i&1=d&2=%2C&3=s&4=n&5=i&6=p&7=p&8=e&9=t&alt=json&key=AIzaSyAuyuThRw5e1oEc5YKJeEMkHA61D1iBfxY",
  //   {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       q: searchTerm,
  //       maxResults: 3,
  //     }),
  //   }
  // );
  // return gapi.client.youtube.search.list("id,snippet", {
  //     //snippet is the metadata about the videos
  //     q: searchTerm,
  //     maxResults: 3,
  //   })
  //   .then(console.log);
}

export { getVideos };
