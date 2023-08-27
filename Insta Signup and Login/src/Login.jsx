import Signup from "./Signup"
import Insta from './assets/Instagram_logo.svg.png'

function Login ({switchToSignup}) {

    const ClickSignupButton = () => {
        switchToSignup()
    }

    

    return (
 <div className="container">
    <img src= {Insta}/>

    <input type="text"  placeholder="Username"/>

    <input type="password" placeholder="Password"/>

    <button onClick={ClickSignupButton}className="login-btn">Login</button>

    <div className="link">
        <p>Don't have account ?</p>
        <a href={<Signup />}>Sign up</a>
    </div>

 </div>
    )
}

export default Login