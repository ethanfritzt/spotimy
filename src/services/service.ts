import { spotifyApi } from "./apiConfig";

const baseUrl = 'http://localhost:5001';

export const getBillboardPlaylist = async () => {
    const response = await fetch(baseUrl+'/api/v1/spotimy/billboardPlaylist', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application.json',
        },
        
    });

    const json = await response.json();
    return response.ok ? json : Promise.reject(json);
};

export const getMyTopTracks = async () => {
    const response = await fetch(baseUrl+'/api/v1/spotimy/topTracks', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application.json',
        },
    });

    const json = await response.json();
    return response.ok ? json : Promise.reject(json);
};

export const getMe = async () => {
    const response = await fetch(baseUrl+'/api/v1/spotimy/getMe', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application.json',
        },
    });

    const json = await response.json();
    return response.ok? json : Promise.reject(json);
};

export const getMyDevices = async () => {
    const response = await fetch(baseUrl+'/api/v1/spotimy/getMyDevices', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application.json',
        }
    });

    const json = await response.json();
    return response.ok? json : Promise.reject(json);
};

export const getMyRecentlyPlayedTracks = async () => {
    const response = await fetch(baseUrl+'/api/v1/spotimy/recentTracks', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application.json',
        },
    });

    const json = await response.json();
    return response.ok? json: Promise.reject(json);
};

export const getCurrentTrack = async () => {
    const response = await fetch(baseUrl+'/api/v1/spotimy/currentTrack', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application.json'
        }
    });

    const json = await response.json();
    return response.ok? json : Promise.reject(json);
};