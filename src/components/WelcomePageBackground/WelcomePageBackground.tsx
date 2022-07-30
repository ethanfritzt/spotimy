import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './WelcomePageBackground.module.scss';
import { getBillboardPlaylist } from '../../services/service';
import Image from 'react-bootstrap/Image';
import ContentCard from '../ContentCard';
import clsx from 'clsx';
import LoginPrompt from '../LoginPrompt';

type WelcomePageBackgroundProps = {
    children?: React.ReactNode;
};

function WelcomePageBackground(props: WelcomePageBackgroundProps) {
    const [albums, setAlbums] = useState<any>({});

    const getAlbumData = async () => {
        const data = await getBillboardPlaylist();
        setAlbums(data);
    };

    useEffect(() =>{
        getAlbumData();
    }, []);

    return (
        <Container>
            <div className={classes.background}>
                {albums.items?.map((song: any) => <Image style={{ height: '105px', width: '105px'}}src={song.track.album.images[1].url}/>)}
            </div>
            <div>
                <LoginPrompt className={classes.overlay} title="Spotimy" description="Welcome to Spotimy" buttonText="Get Started" href="http://localhost:3000/dashboard" />
            </div>
        </Container>
    );
};

export default WelcomePageBackground;