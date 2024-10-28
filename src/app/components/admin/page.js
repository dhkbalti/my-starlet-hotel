'use client'

import Login from "./Login"
import Link from "next/link"
import "../contact/contact.css"
import "./admin.css"
import SignUp from "./SignUp"

import { useState } from "react"


const Page = () => {
  const [login, setLogin] = useState(true)
  return (
    <>
    {
      login?<Login />:<SignUp />
    }
    <div className='main-btn'>
      <label onClick={()=>{setLogin(!login)}}>
          {login?"Don't have an account? SignUp":"Already have an account. Sign In"}
      </label>
    </div>
    
    
    </>
  )
}

export default Page