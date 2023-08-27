import Login from "./login"
import Insta from './assets/Instagram_logo.svg.png'

function Signup ({switchToLogin}) {

    const ClickLoginButton = () => {
        switchToLogin()
    }

    

    return (
 <div className="container">
    <img src= {Insta}/>

    <input type="text"  placeholder="Mobile No or Email"/>

    <input type="text" placeholder="Full Name" />

    <input type="text" placeholder="Phone number, username or email"/>

    <input type="password" placeholder="Password"/>

    <button onClick={ClickLoginButton}className="signup-btn">Signup</button>

    <div className="link">
        <p>Don't have account ?</p>
        <a href={<Login/>}>Log in</a>
    </div>

 </div>
    )
}

export default Signup