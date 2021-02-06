import React, { Component } from 'react';
import Auxx from '../Auxx/Auxx';
import Navbar from '../Navbar/Navbar';
import './Cart.css';
import CartItems from './CartItems/CartItems';
import {connect} from 'react-redux';
let arr = [];

class Cart extends Component{



giveTheSignalToCheckoutItems = ()=>{

    // this.setState({sendToItemsShowingInCheckout:true});

this.props.signal(true);

}

render(){
arr.push(this.props.sendToCartJS);


let filteredArray = arr.filter(elem=>{

    return elem.length!==0;
    

})

console.log(filteredArray);


let manyCartItems = filteredArray.map((eachElem,index)=>{

    return <CartItems key={index} pic={eachElem.pic} price={eachElem.price} totalPriceInitial={eachElem.totalPriceInitial} shoe={eachElem.shoe} size={eachElem.size}/>

})


this.props.sendToItemsShowingInCheckout(filteredArray);



    return(
        
        <Auxx>

{/* <Navbar></Navbar> */}
<section className="sectCheckout">

<div className="top">

<p className="cart">Your Cart</p>

<div className="cartItemsFlex">

    
{manyCartItems}


{/* 

<CartItems/>

<CartItems/>

<CartItems/> */}


<div className="subTotal">

<span>Subtotal</span>

<span>€95.00 EUR</span>


<div className="checkoutButton">
    
    <a href="#!" onClick={this.giveTheSignalToCheckoutItems}>CHECK OUT</a>

</div>


</div>


</div>


</div>

</section>


        </Auxx>


    )
}
}


const mapStateToProps = state=>{

    return{

        // sendItToAppJS : state.sendItToAppJS,

        sendToCartJS : state.sendToCartJS,

    }

}


const mapDispatchToProps = dispatch=>{

    return{
        // sendToCartJS : detailsOfItem=>dispatch({type:'sendToCartJS',detailsOfItem:detailsOfItem})

        sendToItemsShowingInCheckout : filtered=>dispatch({type:'sendToItemsShowingInCheckout',filteredArr:filtered}),

        signal : indicator=>dispatch({type:'signal',sign:indicator})



    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
