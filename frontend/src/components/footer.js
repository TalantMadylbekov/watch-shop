import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import InstagramIcon from '@material-ui/icons/Instagram'
import {Box} from "@material-ui/core";


const Footer = () => {
    return (
        <Box bgcolor="text.disabled">
            <GitHubIcon />
            <LinkedInIcon />
            <WhatsAppIcon />
            <InstagramIcon />
        </Box>
    );
};

export default Footer;