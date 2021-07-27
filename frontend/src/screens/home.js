import React, {useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Product from "../components/product.js";
import {useDispatch, useSelector} from "react-redux";
import {productsListAction} from "../actions/productsAction.js";
import Spinner from "../components/spinner.js";
import Step from "../components/step.js";
import Scanner from "../components/scanner.js";

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(productsListAction())
    },[])
    const { products, isLoading} = useSelector((s) => s.productsList )
    return (
          <>
                  <Step />
                  {
                      isLoading ? <Spinner /> : (
                  <Box mt={3}>
                      <Typography variant="h4" component="h3">
                          New products
                      </Typography>
                        <Grid container spacing={3}>
                          {
                              products.map((product) => (
                                  <Product product={product} />))
                          }
                        </Grid>
                  </Box>
              )
           }
           <Scanner />
       </>
    );
};

export default Home;
