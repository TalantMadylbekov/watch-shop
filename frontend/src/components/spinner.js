import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px'

    },
}));

const Spinner = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress color="secondary" />
        </div>
    );
};

export default Spinner;