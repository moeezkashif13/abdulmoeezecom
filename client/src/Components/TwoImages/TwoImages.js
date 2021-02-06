import React,{Component} from 'react';
require('./TwoImages.css');


class TwoImages extends Component{

    state = {

    count : 0,

    
}


showing = event=>{

    console.log(event.target.className);


if(event.target.className.includes('firstImage')){

    this.setState({count:20})

}else{
    this.setState({count:50})

}

}

leaving = ()=>{

    this.setState({count:0})

}

render(){

  
      


    return(
        <section id="sect1">

<div className="mainImage">
{/* // firstImage */}
<div className="image firstImage" onMouseLeave={this.leaving} onMouseEnter={this.showing}>


{this.state.count===20?<div className="text"><a href="#!">MEN</a> </div>:null}


</div>

{/* secondImage */}

<div className="image secondImage" onMouseLeave={this.leaving} onMouseEnter={this.showing}>


{this.state.count===50?<div className="text"><a href="#!">WOMEN</a></div>:null}


</div>


</div>



        </section>
    )

}
}
export default TwoImages;