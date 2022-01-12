import {useParams, Navigate} from 'react-router-dom';
import {Card,Modal} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {useEffect, useState} from 'react'; 
import { setMenu, checkSubmitCart} from './../Redux/Actions/actionCreaters';
import Counter from './Counter';


function Menu(props){
    /*useEffect(()=>{
        props.setUpMenu()
    },[true]);*/


    const useStyles = makeStyles((theme)=>({
       
        paper:{
            position: 'absolute',
            width: '50%',
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
        }
        
    }))

    const classes = makeStyles();
    
    const { id } = useParams();
    const [nav,setNav] = useState(false);
    let menu = props.hotel;
    console.log(props.counter);
    let handleCart = ()=>{
        if(props.counter==0)
        window.alert("No ITEMS in CART");
        else{
        props.submitCart();
        setNav(nav=>!nav);
        }
    }



    const body = (
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Already have items in cart</h2>
          <button>
            Clear Previous items in Cart and add new ones
          </button>
          <button>
            cancel
          </button>
         
        </div>
      );


    //console.log(props.mmenu);
    if(nav){
    console.log("SSSP");
    
    return <Navigate to={`/Cart`} />
    }



    return (
        <div>
            <table>
            {menu.map(m=>(
                <div>
                <tr>
                <td>{id}</td>
                <td>{m.name}</td>
                <td>{m.cost}</td>
                <td>{m.count}</td>
                <Counter name={m.name} />
                </tr>
                
                </div>
               
            ))
            }

            </table>
           <button onClick={()=>{ handleCart() }}> ADD TO CART </button>
            
        </div>
    )
}

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        hotel:state.hotelInAction,
        counter:state.counter
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        setUpMenu:()=>{dispatch(setMenu())},
        submitCart:()=>{dispatch(checkSubmitCart())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);
