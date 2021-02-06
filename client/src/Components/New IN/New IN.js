import React from 'react';
import './New IN.css';
import {connect} from 'react-redux';
import Arr from './Arr';
import { Container, Row,Col } from 'react-bootstrap';

require('./New IN.css');


const NewIN = props=>{

    

    return(
        
        <section className="sect2" >

<div className="newIN">

<h1>{props.collection} COLLECTION</h1>

<a href="#!" style={{textAlign:'center'}}>{props.tagLine}</a>

</div>

<div className="fourColumnsContainer">

 {/* <Container fluid> */}
    {/* <Row >  */}
<Arr collection={props.collection}/>

{/* </Row> */}
{/* </Container>  */}


</div>


        </section>

    )


}

const mapStateToProps = state =>{

    return{

        sendArraysToNewIN : state.sendArraysToNewIN,
        sendItToAppSAMP : state.sendItToAppSAMP
    }

}

const mapDispatchToProps = dispatch =>{

    return{
        
        sendCollection : value=>dispatch({type:'collection',val:value})

    }

}



export default connect(mapStateToProps,mapDispatchToProps)(NewIN);