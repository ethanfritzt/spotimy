import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './Welcome.module.scss';
import WelcomePageBackground from '../../components/WelcomePageBackground';
import { spotifyApi } from '../../services/apiConfig';

type WelcomeProps = {
    //
};

function Welcome(props: WelcomeProps) {

    return (
        <WelcomePageBackground />
    );
};

export default Welcome;