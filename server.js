const stripe = require('stripe')('sk_test_51I5zxRAEk1YEt5QdaEvDjeA42XWcUwvhGUt64SbFmWxY0mfg9QjCTlUtqlG5t6iRl3vzE3ExqMl3Chw5OvLUsjwN001B5coTAf');
const express = require('express');

let app = express();

// var bodyParser = require('body-parser');

// MAYBEEE /PUBLICC KI JAGAA BUILDD AAYEE

// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('.'));
app.use(express.json());


const PORT = process.env.PORT || 4242; // Step 1

const YOUR_DOMAIN = 'http://localhost:3000';


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
} 

// HO SAKTAA KE YE IFFF WALAA PARTTT POST METHOD KE NEECHE AAYEE


app.post('/create-checkout-session', async (req, res) => {
  
  
  
  
  const session = await stripe.checkout.sessions.create({
    
    payment_method_types: ['card'],

    line_items: [
      ...req.body,
  ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });



  res.json({ id: session.id});



});



app.listen(PORT, () => console.log(`Running on port ${PORT}`));