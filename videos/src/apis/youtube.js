import axios from 'axios';

const KEY= 'AIzaSyDe9us1ErmPa1Husygv5P6WRJqxicZndo4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

