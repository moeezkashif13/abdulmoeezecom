import React, { Component } from 'react';
import {connect} from 'react-redux';

require('./ItemsShowingInCheckout.css');

class ItemsShowingInCheckout extends Component{

    state = {
    check : [],

    }

componentDidMount(){

// this.state.check.push(this.props)
//     // console.log(this.props);
//     console.log(this.state.check);
    
//     this.props.sendItToAppSAMP(this.state.check);
    

}
    
    render(){

        


    // let quantity,totalPrice;

    // if(this.props.twoDetails!==null){

    //     let replicate = {...this.props.twoDetails};

    //     quantity = replicate.quantityInNumbers;

    //     totalPrice = replicate.multipliedTotal+`.00`;


    // }

    

    return(
        <div className="containerOfThree">

<div className="imageInCheckout">

{/* <div className="circle"> {this.props.twoDetails?quantity:1}</div> */}

<div className="circle">{this.props.quantityInNumbers}</div>


    <img src={this.props.pic} alt="..."/>
</div>

<div className="othersInCheckout" >

<p style={{color:'red'}}>{this.props.itemName}</p>

<div className="bothPriceAndSizeFlex">
    <p >{this.props.size}</p>
 
    <p id="there" style={{marginLeft:'auto',marginTop:'-12.5px',fontSize:'1.7rem'}}>Total : ${this.props.totalPriceInitial}.00</p>


</div>


</div>


        </div>
    )
}
}

const mapStateToProps = state=>{

    return{
    }

}

const mapDispatchToProps = dispatch=>{

    return{
        // sendItToAppSAMP : mainArr=>dispatch({type:'sendItToAppSAMP',arr:mainArr})

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(ItemsShowingInCheckout);