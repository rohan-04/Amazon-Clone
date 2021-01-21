import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

// public key from stripe
const promise = loadStripe("pk_test_51IAWtnAR8uLwcnfj476jAqLJQziXbFGyL8aFG4WDcFa68q7cOZhxp4eRaT18Y4FmKAS0Uv2YHFUhaLGoWfKTsDUL00vAzEhJnA")


function App() {
  const [{ }, dispatch] = useStateValue();


  useEffect(() => {
    // will only run when the app component loads

    auth.onAuthStateChanged(authUser => {
      // console.log(authUser)
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])


  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">   {/* default route should always be at bottom */}
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
