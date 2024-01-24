import React from 'react';
import emailIcon from './assets/icons/email.png';
import linkedInIcon from './assets/icons/linkedin.png';
import githubIcon from './assets/icons/github.png';

const IconContext = React.createContext({
    email: emailIcon,
    linkedIn: linkedInIcon,
    github: githubIcon,
});

export default IconContext;