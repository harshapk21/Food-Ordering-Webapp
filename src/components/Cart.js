import {connect} from 'react-redux';
import {emptyCart} from './../Redux/Actions/actionCreaters'
import HandleDisplay from './HandleDisplay';

function Cart(props){

    let handleClearCart = ()=>{
        props.clearCart();
    }


    return (
        <div>
        {
        (props.items.length>0)?(
        
        <div>
        <HandleDisplay items={props.items}/>
        <button onClick={()=>{ handleClearCart() }}>Clear Cart</button>
        <button>Checkout</button>
        </div>
        ):("No Items")
        }
       
        
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items:state.itemsInCart,
        counter:state.counter,
        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        clearCart:()=>{dispatch(emptyCart())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);