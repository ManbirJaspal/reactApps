import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
                  Authorization: 'Client-ID a74e1aba63038334c1c9cd5a8935331834acd030f3fb84dc88f7f45f5a9dc94b'   //providing Authorization in the way requested on the documentation of Unsplash API. We create a headers object. This is going to  add headers to the unsplash API */
                  }
});