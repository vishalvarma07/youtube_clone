const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    q: 'music',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': '5c1724deddmsh55214e43540a5e6p1acdbejsn682fd9614598',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (q) => {
  options.params.q = q;
  const response = await axios.request(options);
  return response.data;
}

// export const fetchFromAPI = async(url) => {
//     console.log("Hello World");
//     const response = await axios.get(``, options);
//     console.log('hellorepsonse' + response.json);
//     return response.data;
//     //const {data} = await axios.get(`${BASE_URL}/${url}`, options); direct destructuring
// }