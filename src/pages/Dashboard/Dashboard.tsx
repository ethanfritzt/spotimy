import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import ContentCard from '../../components/ContentCard';
import classes from './Dashboard.module.scss';

import { getMyTopTracks, getMe, getMyDevices, getMyRecentlyPlayedTracks, getCurrentTrack } from '../../services/service';
import clsx from 'clsx';

type DashboardProps = {
    //
};

function Dashboard(props: DashboardProps) {
    // Hooks
    const [topTracks, setTopTracks] = useState<any>([]);
    const [me, setMe] = useState<any>();
    const [myDevices, setMyDevices] = useState<any>();
    const [recentTracks, setRecentTracks] = useState<any>();
    const [currentTrack, setCurrentTrack] = useState<any>();

    useEffect(() => {
        getMyTopTracksAsync();
        getMeAsync();
        getMyDevicesAsync();
        getMyRecentlyPlayedTracksAsync();
        getCurrentTrackAsync();
    }, []);

    // Async function
    const getMyTopTracksAsync = async () => {
        const data = await getMyTopTracks();
        setTopTracks(data);
    };

    const getMeAsync = async () => {
        const data = await getMe();
        setMe(data);
    };

    const getMyDevicesAsync = async () => {
        const data = await getMyDevices();
        setMyDevices(data);
    };

    const getMyRecentlyPlayedTracksAsync = async () => {
        const data = await getMyRecentlyPlayedTracks();
        setRecentTracks(data);
    };

    const getCurrentTrackAsync = async () => {
        const data = await getCurrentTrack();
        setCurrentTrack(data);
    };

    console.log(currentTrack);

    return (
        <>
            <div style={{ textAlign: 'right' }} className="m-5">
                <h1>Welcome {me?.body?.display_name}</h1>
            </div>
            <div className={classes.currentlyPlayingText}>Currently Playing</div>
            <div className={classes.container}>
            <div className={classes.currentlyPlayingContainer}>
                <div className={clsx('d-flex', classes.currentlyPlayingInfo)}>
                    <Image style={{ height: 150, width: 150, paddingBottom: 0 }} src={currentTrack?.body?.item?.album?.images[1].url} />
                    <div className="flex-column text-light">
                        <p className="m-4">{currentTrack?.body.item.name}</p>
                        {/** // TODO: handle how to display multiple artsits */}
                        <p className="m-4" style={{ fontSize: '13px' }}>{currentTrack?.body?.item?.artists.map((artist: any) => artist.name)}</p>
                    </div>
                </div>
                <ContentCard className={clsx(classes.currentlyPlayingBg, 'bg-success')}>

                </ContentCard>
            </div>
            </div>
            <div className={classes.topTracksText}>Your Top Tracks</div>
            <div className={classes.topTracks}>
                <div className={classes.trackListContainer}>
                    {topTracks.slice(0, 5).map((song: any) =>
                        <div className={clsx('d-flex', classes.trackList)}>
                            <Image style={{ height: 150, width: 150, paddingBottom: 0 }} src={song.album?.images[1].url} />
                            <div className="flex-column text-light">
                                <p className="m-4">{song.name}</p>
                                <p className="m-4" style={{ fontSize: "13px" }}>{song.artists[0].name}</p>
                            </div>
                        </div>
                    )}
                </div>
                <ContentCard className={clsx(classes.sideContainer, 'bg-primary')}>

                </ContentCard>
            </div>
        </>
    );
};

export default Dashboard;