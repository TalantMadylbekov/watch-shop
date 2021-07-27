import React from 'react';
import scanner from '../images/scanner2.jpg'
import {Box} from "@material-ui/core";

const Scanner = () => {
    return (
        <Box mt={3}>
            <img src={scanner}/>
        </Box>
    );
};

export default Scanner;