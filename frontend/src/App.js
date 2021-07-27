import React from 'react';
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./screens/home.js";
import Container from "@material-ui/core/Container";
import ProductDetails from "./screens/product-details.js";
import Cart from "./screens/cart.js";
import Register from "./screens/register.js"

import {Box} from "@material-ui/core";
import Login from "./screens/login";

function App() {
  return (
  <Router>
    <Header />
    <main>
      <Container fixed>
        <Switch>
          <Box py={4}>
            <Route exact path='/' component={() => <Home />} />
            <Route exact path='/product/:id' component={() => <ProductDetails />} />
            <Route exact path='/cart/:id?' component={() => <Cart />} />
            <Route exact path='/login' component={() => <Login />} />
            <Route exact path='/register' component={() => <Register />} />

          </Box>
        </Switch>
      </Container>
    </main>
    <Footer />
  </Router>
  );
}

export default App;
