import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonIcon from '@material-ui/icons/Person'
import {useDispatch, useSelector} from "react-redux";
import {Menu, MenuItem} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {logout} from "../actions/userAction.js"

const useStyles = makeStyles((theme) => ({
    topMenu:{
        display: "flex",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles()
    const {userInfo} = useSelector(s => s.userLogin)
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header>
            <AppBar position="static" color={"primary"}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Watch Shop
                    </Typography>
                    <Button color="inherit" component={Link} to='/'>Main</Button>
                    <Button color="inherit" component={Link} to='/cart'><ShoppingCartIcon /></Button>
                    {userInfo ? (
                            <Box>
                                <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    {userInfo.name}
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose} component={Link} to="/profile">Profile</MenuItem>
                                    <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
                                </Menu>
                            </Box>
                        ):
                       <Button color="inherit" component={Link} to='/login'><PersonIcon /></Button>
                    }
                </Toolbar>
            </AppBar>
        </header>

    );
};

export default Header;