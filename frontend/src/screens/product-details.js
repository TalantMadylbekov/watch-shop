import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Rating from "../components/rating.js";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {productDetailsAction} from "../actions/productsAction.js";
import Spinner from "../components/spinner.js";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
  media:{
      height: '400px',
      objectFit: 'contain',
      padding: '30px'
  },
    formControl: {
      width: '100%'
    }
});

const ProductDetails = () => {
    const {id} = useParams()
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const { product, isLoading } = useSelector(s => s.productDetails)
    const [open, setOpen] = React.useState(false)
    const [qt, setQt] = React.useState(0)
    useEffect(() => {
        dispatch(productDetailsAction(id))
    },[id, dispatch])

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <Box my={3}>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    <Grid container spacing={3}>
                        <Grid item lg={5}>
                            <Card>

                                <CardMedia
                                    className={classes.media}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    image={product.image}
                                    title="Contemplative Reptile"
                                />
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <List className={classes.root}>
                                <ListItem>
                                    <ListItemText primary={product.name} />
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Rating rating={product.rating} text={`${product.numReviews} reviews`} />
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemText primary={`Price: ${product.price}`} />
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemText primary={`Description: ${product.description}`} />
                                </ListItem>

                            </List>
                        </Grid>
                        <Grid item lg={3}>
                            <List className={classes.root}>
                                <ListItem>
                                    <ListItemText primary="Price" />
                                    <ListItemText primary={product.price} />
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemText primary="Status" />
                                    <ListItemText primary={product.counterInStock > 0 ? "In Stock" : "Outer stock"} />
                                </ListItem>

                                    {
                                        product.counterInStock > 0 && (
                                            <>
                                            <Divider />
                                            <ListItem>
                                            <FormControl className={classes.formControl}>
                                        <InputLabel id="qt">Select quantity</InputLabel>
                                        <Select
                                        labelId="qt"
                                        id="demo-controlled-open-select"
                                        open={open}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                        onChange={(e) => setQt(e.target.value)}

                                        >
                                        {
                                            Array(product.counterInStock).fill(0).map((el, idx) => (
                                                <MenuItem key={idx} value={idx + 1}>{idx + 1}</MenuItem>
                                            ))
                                        }
                                        </Select>
                                        </FormControl>
                                        </ListItem>
                                            </>
                                        )
                                    }

                                <Divider />
                                <ListItem>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        fullWidth
                                        disabled={product.counterInStock === 0}
                                        onClick={() => history.push(`/cart/${product._id}?qt=${qt}`)}
                                    >
                                        Add to cart
                                    </Button>
                                </ListItem>
                            </List>
                        </Grid>

                    </Grid>
                )
            }
        </Box>
    );
};

export default ProductDetails;