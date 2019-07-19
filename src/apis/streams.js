import axios from 'axios';

//TFT Twitch GameID: 34941775744
export default axios.create({
    headers: {
        'Client-ID': 'q07uubs3hamg484jor8gh4sspy1onu',
    },
    baseURL: 'https://api.twitch.tv/'
});