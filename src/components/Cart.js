import {connect} from 'react-redux';
import {emptyCart} from './../Redux/Actions/actionCreaters'
import HandleDisplay from './HandleDisplay';
import {Navigate} from 'react-router-dom';
import { useState } from 'react';
import './../styles/Cart.css';
function Cart(props){
    
    let [nav,setNav] = useState(0);
    let handleClearCart = ()=>{
        props.clearCart();
    }

    let handleCheckout = ()=>{
       
        if(props.isLogin){
        setNav({
            nav:nav+1
        })
    }
        else
        window.alert("Please Login to PLace order");
        
    }
  
   
    if(nav)
    return <Navigate to={`\Checkout`} />

    return (
        <div>
        {
        (props.items.length>0)?(
        
        <div>
        <HandleDisplay items={props.items}/>
        <button onClick={()=>{ handleClearCart() }}>Clear Cart</button>
        <button onClick={()=>{ handleCheckout() }}>Checkout</button>
        </div>
        ):("No Items")
        }
       
        
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items:state.itemsInCart,
        isLogin:state.isLogin
        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        clearCart:()=>{dispatch(emptyCart())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);