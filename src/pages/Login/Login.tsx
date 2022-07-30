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

    return (
        <LoginPrompt className={classes.loginContainer} title="Spotimy" description="Login with Spotify" buttonText="Login" href="http://localhost:5001" />
    );
};

export default Login;