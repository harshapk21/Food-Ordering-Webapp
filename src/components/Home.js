import {Card,Modal} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "./../styles/Home.css";
import { Navigate } from "react-router-dom";
import { getHotels,setCurrentHotel } from "./../Redux/Actions/actionCreaters";
import {connect} from "react-redux";
import { useState } from 'react';
import Menu from './Menu';

const useStyles = makeStyles((theme)=>({
    root:{
       //display:"inline",
        border:"2px solid red",
        width:"100%",
        height:"100%",
        
    },
   
}));

function Home(props){

    let classes = useStyles();
    let h = props.hotels;
    const [nav,setNav] = useState(false);
    const [id,setId] = useState(0);
    let setHotel = (e,a)=>{
        console.log(e);
        props.setHotelInStore(e);
        setId(id => id+e);
        setNav(nav=>!nav);
       
    }

    

    if(nav){
        return <Navigate to={`/Menu/${id}`}/>
    }

    return (
        <div className="grid-container">
           

               {
               h.map(ola => (
              
                            <a onClick={(e)=>{setHotel(ola.id,e) }}>
                       
                           <div className="container">
                            
                            <div className="name"><h1>{ola.name}</h1></div>
                            <div className="count"><p>count</p></div>
                            <div className="likes"><p>likes</p></div>
                        
                            </div>
        
                            </a>
           
               )
               )
    
               }
            
           
        </div>
    
    )

}

const mapStateToProps = (state)=>{
    //console.log(state);
    return {
        hotels:state.nameOfRestaurants,
    }
}

const mapDispatchToProps = (dispatch)=>{
   return {
       getAllHotels:()=> dispatch(getHotels()),
       setHotelInStore:(h)=> dispatch(setCurrentHotel(h))
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)