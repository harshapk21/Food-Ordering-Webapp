import "./../styles/Header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {

  let cart = (props.counter==0)?(0):(props.count);
  return (
    <div className="header">
        <div className="Title">
          <h1 className="logo">Swiggy</h1>
        </div>
        <div className="Navigation">
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Cart">Cart({cart})</Link></li>
          <li>
            {
          (props.isLogin)
          ?
          (<Link to="/Profile">Profile</Link>)
          :
          (<Link to="/Login">Login</Link>)
            }
          </li>
        </ul>
        </div>
        

    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    count:state.itemsInCart.length,
    counter:state.counter,
    isLogin:state.isLogin
  }
}

export default connect(mapStateToProps,null)(Header);
