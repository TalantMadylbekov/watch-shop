import React, {useEffect} from 'react'
import {useParams, useLocation, Link, useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {addToCart, removeFromCart} from "../actions/cartAction.js"
import {Box} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import Message from "../components/message.js";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import DeleteIcon from '@material-ui/icons/Delete'
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";


const Cart = () => {
    const {id} = useParams()
    const location = useLocation()
    const dispatch = useDispatch()
    const qt = +location.search.split('=')[1]
    const { cartItems } = useSelector(s => s.cart)
    const history = useHistory()
useEffect(() => {
    if (id) {
        dispatch(addToCart(id, qt))
    }
}, [id, dispatch])
    const checkoutHandler = () => {
        history.push('/login')
    }
        return (
        <Box>
            <Typography variant="h5">Shopping Cart</Typography>
            <Box my={3}>
                {
                    cartItems.length === 0 ?
                        <Message type='warning'>
                            Empty cart
                            <Link to='/'>Go main</Link>
                        </Message> : (
                            <Box>
                                <Grid container spacing={3}>
                                    <Grid item lg={8} sm={12} xs={12}>
                                        {
                                            cartItems.map(cartItem => (
                                                <Grid container spacing={3}>
                                                    <Grid item lg={3} sm={12} xs={12}>
                                                        <Card>
                                                            <CardActionArea>
                                                                <CardMedia
                                                                    component="img"
                                                                    alt={cartItem.name}
                                                                    height="140"
                                                                    image={cartItem.image}
                                                                    title={cartItem.name}
                                                                />
                                                                </CardActionArea>
                                                        </Card>
                                                    </Grid>
                                                    <Grid item lg={3} sm={12} xs={12}>
                                                        <Typography variant='h6'>{cartItem.name}</Typography>
                                                    </Grid>
                                                    <Grid item lg={2} sm={12} xs={12}>
                                                        <FormControl>
                                                            <InputLabel id="demo-controlled-open-select-label">Select quantity</InputLabel>
                                                            <Select
                                                                native
                                                                labelId="demo-controlled-open-select-label"
                                                                id="demo-controlled-open-select"
                                                                value={cartItem.qt}
                                                                onChange={(e) => dispatch(addToCart(cartItem.product, +e.target.value))}

                                                            >
                                                                {
                                                                    Array(cartItem.counterInStock).fill(0).map((el, idx) => (
                                                                        <option key={idx} value={idx + 1}>{idx + 1}</option>
                                                                    ))
                                                                }
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item lg={4} sm={12} xs={12}>
                                                        <Button
                                                            variant="contained"
                                                            color="secondary"
                                                            startIcon={<DeleteIcon />}
                                                            onClick={() => dispatch(removeFromCart(cartItem.product))}
                                                        >
                                                            Delete
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            ))
                                        }
                                    </Grid>
                                    <Grid item lg={4} sm={12} xs={12}>
                                        <Typography variant="h5">Your cart:</Typography>
                                        <List>
                                            <ListItem>
                                                <Box display='flex' width={1}>
                                                    <Box component='span' flexGrow={1}>Items:</Box>
                                                    <Box component='span'>{cartItems.reduce((acc, rec) => acc + rec.qt, 0 )}</Box>
                                                </Box>

                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <Box display='flex' width={1}>
                                                    <Box component='span' flexGrow={1}>Total price:</Box>
                                                    <Box component='span'>{cartItems.reduce((acc, rec) => acc + rec.qt * rec.price, 0 )}$</Box>
                                                </Box>

                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    fullWidth
                                                    onClick={checkoutHandler}
                                                >
                                                    Confirm order
                                                </Button>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Box>
                        )
                }
            </Box>
        </Box>
    );
};

export default Cart;