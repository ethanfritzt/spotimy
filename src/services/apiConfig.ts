import SpotifyWebApi from "spotify-web-api-node";

export const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID, 
    clientSecret: process.env.REACT_APP_CLIENT_ID,
    redirectUri: process.env.REACT_APP_CALLBACK_URL,
});