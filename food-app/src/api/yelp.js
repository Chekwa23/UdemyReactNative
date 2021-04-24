import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        authorization: "Bearer zfdfCMkX1s_Raxh6eF0kl94vbTW2rKd3g2bCUyAJXps9zOFFKCRhbqZESU83i3nBz9oOtSGbG83AejBbFasxtJN_PtOg7tO70qC3zx8NcEozaUI01BnY6c307uZ3YHYx"
    }
});