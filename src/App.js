import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./Footer";
import Footerlogo from "./Footerlogo";

const promise = loadStripe(
  "pk_test_51IkW7ySBtjMJYYtz8CHUQHaUHZ6eTmkEaCBqr4IcyK6eBcBfjOwI9mBp3zokjUBsnHZWAawTcrn3bWu1j0cLINDH008qa2qJBL"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
  
    <Router>
    <div className="app">
      <Switch>
      <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
            <Footerlogo />
          </Route>
        <Route path='/login'>
          <Login />
        </Route>
      <Route path="/checkout">
      <Header />
          <Checkout />
          <Footer />
          <Footerlogo />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={ promise }>
          <Payment />
          </Elements>
          <Footer />
          <Footerlogo />
        </Route>
        <Route path="/">
          <Header />
          <Home />
          <Footer />
          <Footerlogo />
        </Route>   
      </Switch>
    </div>
    </Router>
  );
}

export default App;
