


import React,{Component} from 'react';
import Navbar from './Components/Navbar/Navbar';
import TwoImages from './Components/TwoImages/TwoImages';
import NewIN from './Components/New IN/New IN';
import MainPage from './Components/MainPage/MainPage';
import Auxx from './Components/Auxx/Auxx';
// import Login from './Components/Login/Login';
// import Register from './Components/Register/Register';

import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
// import PaymentFORM from './Components/PaymentFORM/PaymentFORM';
// import Stripeee from './Components/Stripee/Stripee';
// import CARDDBROOO from './Components/STRIPEEEE/stripefrontend/src/CARDDBROOO';

// import FORMFROMCODEPEN from './Components/FORMFROMCODEPEN/FORMFROMCODEPEN';

import Samp from './Components/samp/App-samp';





class App extends Component {


  
  

render(){



  return (

    // <BrowserRouter>

<Auxx>




{/* <Login/> */}

  {/* <Navbar/> */}



{/* <BootstrapTestingggg/> */}

  {/* <TwoImages/>  */}





 <NewIN collection="SNEAKERS" tagLine="Also See Others" />


 <NewIN collection="BOOT" tagLine="Also See Others" />


 <NewIN collection="SHOES" tagLine="Also See Others" />

 <NewIN collection="ACCESSORIES" tagLine="Also See Others" />

 <NewIN collection="WEAR" tagLine="Also See Others" />



<MainPage/>


{/* <Switch> */}
{/* <Route  path="/checkout" component={<Cart/>} /> */}
{/* </Switch> */}
 <Cart/> 
 <Checkout/> 

 {/* <PaymentFORM/>  */}

 {/* <Stripeee/>  */}


  {/* <CARDDBROOO/>  */}

 {/* <FORMFROMCODEPEN />  */}

 <Samp /> 


</Auxx>
// </BrowserRouter>
  );
}
}


export default App;
