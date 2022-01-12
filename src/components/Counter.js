import {incCount,decCount} from "./../Redux/Actions/actionCreaters";
import {connect} from 'react-redux';


function Counter(props){

//console.log(props);
let name = props.name;
        let handleDec1 = ()=>{
            props.handleDec(name);
        }

        let handleInc1 = ()=>{
            props.handleInc(name);
        }


        return (
            <div>
                
                <button onClick={()=> {handleInc1()}}>+</button>
                <button onClick={()=> {handleDec1()}}>-</button>
            </div>
        )
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleInc:(name)=> dispatch(incCount(name)) ,
        handleDec:(name)=> dispatch(decCount(name)) 
    }
}

export default connect(null,mapDispatchToProps)(Counter);