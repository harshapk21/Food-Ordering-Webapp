import "./../styles/Auth.css";

function Auth(){
return (
    <div className="main">
        <input type="text" className="username" placeholder="UserName" />
        <input type="password" className="pwd" placeholder="password"/>
        <button>Login</button>
    </div>
)
}

export default Auth;