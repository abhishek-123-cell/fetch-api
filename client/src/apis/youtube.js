import axios from "axios";
let KEY = "AIzaSyAUsgsOLwGBoS-kG84uKAi0utcYC5qrrFk"; 

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 50,
    key: KEY,
  },
});
