import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Rating from "./rating.js";
import CardActions from "@material-ui/core/CardActions";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    productImage: {
        objectFit: 'contain'
    }
})
const Product = ({product}) => {
    const classes = useStyles()
    return (
        <Grid item sm={12} md={6} lg={3} xl={3} key={product._id}>
            <Card className={classes.root}>
                <Link to={`/product/${product._id}`}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={product.image}
                            className={classes.productImage}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {product.name}
                            </Typography>
                            <Rating rating={product.rating} text={`${product.numReviews} reviews`}/>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions>
                    <Typography variant="h6">
                        <strong>Price: ${product.price}$</strong>
                    </Typography>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;