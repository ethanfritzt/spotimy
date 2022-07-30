import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import classes from './Login.module.scss';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import ContentCard from '../../components/ContentCard';
import { findByLabelText } from '@testing-library/react';
import { Link } from 'react-router-dom';
import LoginPrompt from '../../components/LoginPrompt';

type LoginProps= {
    //
};

function Login(props: LoginProps) {

    const path = 'http://localhost:5001/';
    const spotifyLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png';


    return (
        
        <div>
            <LoginPrompt className={classes.loginContainer} title="Spotimy" description="Login with Spotify" buttonText="Login" href="http://localhost:5001" />
            <img src={spotifyLogo} className={classes.spotifyLogo} />
        </div>

)};

export default Login;