const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IAWtnAR8uLwcnfj4V1P9B52gJlyym0G5MHM40O9pb5m7Agfd0k2Mp5ns9trCCQf0xEQQQfCHV7qtHLyoTElhMR900DScj5zBR");


// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;


    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
    })
    //console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-3a14a/us-central1/api