import Link from "next/link"
import css from "./admin.css"
import SignUp from "./SignUp"


const Login = () => {
  return (
    <>
    <section className="admin-login">
      <div className="container">
        <div className="image-box">
          <img src="/images/parking.png" />
        </div>

        <div className="login"> 
          <img src="/images/logo.png" />
          <h3>Nice to see you again</h3>
          <div className="input">
            <input type="text" placeholder="Email or phone number"></input>
            <input type="password" placeholder="Enter password"></input>  
          </div>
          <Link className="link" href="">Forget Password?</Link>
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

export default Login