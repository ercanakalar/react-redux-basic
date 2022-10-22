import axios from "axios";

// const searchImages = (term) => {

// }

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 7KFYx6ivvVodVYvKSJX4QgxBioZUP5MUtbWpgks7C6M",
  },
});
