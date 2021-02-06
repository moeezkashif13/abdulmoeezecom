import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./App-samp.css";
// import axios from "axios";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
import {connect} from 'react-redux';

const stripePromise = loadStripe("pk_test_51I5zxRAEk1YEt5Qd9NA3hgThWs37c5m1wFEARaauLHjMx9pkQbW0q5YRRqXMTl8gZgt4HRFc0xUO43ga4Feoskpk00jsBzheUQ");





const ProductDisplay = ({ handleClick }) => (


  
  <section>
    {/* <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </div> */}
    <button id="checkout-button" role="link"  onClick={handleClick}>
      
    </button>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);


const renameKeys = (keysMap, obj) => {
  // debugger;

  return Object.keys(obj).reduce((acc, key) => {
    // debugger;
    const renamedObject = {
      [keysMap[key] || key]: obj[key]
    };

    // debugger;

    return {
      ...acc,
      ...renamedObject
    };
  }, {});
};







const Samp = props=>{


  

  const [message, setMessage] = useState("");
  
  let arrayToSlice = props.sendItToAppSAMP;
let avi = arrayToSlice.slice();

 let samp = {
    price_data: {
      currency: 'usd',
      product_data: {
        name: 'saodjasodj Attachments',
        images: ['https://i.imgur.com/EHyR2nP.png'],
      },
      unit_amount: 2000,
    },
    quantity: 1,
  };

let objectsSendToStripe =  avi.map(elem=>{
  elem['currency'] = 'usd';
  
  // changingg keysss
  // renameProp('shoe', 'name', elem);

   const changedKeys =renameKeys(
  {
    // currency: 'currency',
    shoe: 'name',
    pic : 'images',
    price : 'unit_amount',
    quantityInNumbers : 'quantity'
  },
  // {
  //   name: 'Bobo',
  //   job: 'Front-End Master'
  // }
  elem
);
// console.log(samp);

// console.log(changedKeys);

let avien = {
  price_data:{
  currency: "usd",
// id: "idddddV8Q8JLMmGmVUtRmy_pKKH",

product_data:{ name: changedKeys.name,
images: [changedKeys.images],},
// multipliedTotal: 40,

// size: "XL",
// totalPriceInitial: "10.00",
unit_amount: changedKeys.unit_amount+='00',
},
quantity: changedKeys.quantity,
}

// console.log(avien);


  return avien;
})

console.log(objectsSendToStripe);



  useEffect(() => {


    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    // if (query.get("canceled")) {
    //   setMessage(
    //     "Order canceled -- continue to shop around and checkout when you're ready."
    //   );
    // }


  }, []);

  const handleClick = async (event) => {
    // event.preventDefault();
    // console.log(props);
    
    let check = [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'saodjasodj Attachments',
          images: ['https://i.imgur.com/EHyR2nP.png'],
        },
        unit_amount: 2000,
      },
      quantity: 1,
    },{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'seconddd checkkkk Attachments',
          images: ['https://i.imgur.com/EHyR2nP.png'],
        },
        unit_amount: 2000,
      },
      quantity: 1,
    }];
    
   
    const stripe = await stripePromise;
// console.log(stripe);

    const response = await fetch("/create-checkout-session", {
      method: "POST",
        headers : {
        "Content-Type" : "application/json",
        // "Content-Type" : application/x-www-form-urlencoded",
      },
      body : JSON.stringify(objectsSendToStripe)
    });

    

    const session = await response.json();

    
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });



    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }

  };

if(props.sendSignalToAppSAMP){
  console.log('wwww');
 handleClick();
}

  return message ? (
    <Message message={message} />
  ) : 
  (
    <ProductDisplay handleClick={handleClick} />
  );
  // null
}

const mapStateToProps = state=>{

  return{
    sendItToAppSAMP : state.sendItToAppSAMP,
    sendSignalToAppSAMP : state.sendSignalToAppSAMP,
  }

}

const mapDispatchToProps = dispatch=>{

  return{


  }

}

export default connect(mapStateToProps,mapDispatchToProps)(Samp);