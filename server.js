import SpotifyWebApi from "spotify-web-api-node";
import express from "express";
import cors from 'cors';
import 'dotenv/config';

const scopes = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'app-remote-control',
    'user-read-email',
    'user-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-modify-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify'
  ];

console.log(process.env.REACT_APP_CLIENT_ID);

var spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    redirectUri: process.env.REACT_APP_CALLBACK_URL,
});

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.redirect(spotifyApi.createAuthorizeURL(scopes, true, true));
    console.log("Authenticating...");
});

app.get('/callback', (req, res) => {
 
    if (req.query.error) {
        res.send(req.query.error);
    }

    spotifyApi.authorizationCodeGrant(req.query.code).then(data => {
        const access_token = data.body['access_token'];
        const refresh_token = data.body['refresh_token'];
        const expires_in = data.body['expires_in'];

        // set the access token and refresh token
        spotifyApi.setAccessToken(access_token);
        spotifyApi.setRefreshToken(refresh_token);

        res.redirect("http://localhost:3000/welcome");

        setInterval(async () => {
            // refresh the access token
            const data = await spotifyApi.refreshAccessToken();
            const access_token = data.body['access_token'];
            spotifyApi.setAccessToken(access_token);

        }, expires_in / 2 * 1000);
    }).catch(err => {
        res.send(err);
    });

    console.log("Authenticated!");
});

app.get('/api/v1/spotimy/billboardPlaylist', async (req, res) => {
    const data = await spotifyApi.getPlaylist('6UeSakyzhiEt4NB3UAd6NQ');
    return res.send(data.body.tracks);
});

app.get('/api/v1/spotimy/topTracks', async (req, res) => {
    const data = await spotifyApi.getMyTopTracks();
    return res.send(data.body.items);
});

app.get('/api/v1/spotimy/getMe', async (req, res) => {
    const data = await spotifyApi.getMe();
    return res.send(data);
});

app.get('/api/v1/spotimy/getDevices', async (req, res) => {
    const data = await spotifyApi.getMyDevices();
    return res.send(data);
});

app.get('/api/v1/spotimy/recentTracks', async (req, res) => {
    const data = await spotifyApi.getMyRecentlyPlayedTracks();
    return res.send(data);
});

app.get('/api/v1/spotimy/currentTrack', async (req, res) => {
    const data = await spotifyApi.getMyCurrentPlayingTrack();
    return res.send(data);
});

app.get('/api/v1/spotimy/playbackState', async (req, res) => {
    const data = await spotifyApi.getMyCurrentPlaybackState();
    return res.send(data);
});

app.listen(5001, () =>
    console.log("Listening on port 5001...")
);
