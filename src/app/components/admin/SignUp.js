import Link from "next/link"
import Login from "./Login"

const SignUp = () => {
    return (
        <>
        <section className="admin-login">
          <div className="container">
            <div className="image-box">
              <img src="/images/parking.png" />
            </div>
    
            <div className="login"> 
              <img src="/images/logo.png" />
              <h3>Sign Up</h3>
              <div className="input">
                <input type="text" placeholder="Email or phone number"></input>
                <input type="password" placeholder="Enter password"></input>  
                <input type="password" placeholder="Confirm password"></input>  
              </div>
              <div className="btns">
                <button>Sign in</button>
                <button>Or sign in with Google</button>
              </div>
               
            </div>
    
          </div>
    
        </section>
    
        </>
      )
}

export default SignUp