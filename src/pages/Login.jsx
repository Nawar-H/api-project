import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import LoginForm from "../assets/components/LoginForm/LoginForm"

const Login = () => {
  const [data,setData] =useState({})
  const navigate = useNavigate()
  useEffect(()=>{
      if(data.email){
          axios.post("https://vica.website/api/task-login" , data , {
            headers :{
              "Content-Type" :"multipart/form-data",
              "Accept" : "application/json"
            }
          })
          .then(res=>{
            localStorage.setItem("token" , res.data.token)
            navigate("/product")
          })
          .catch(error=>console.log(error))
        }
  },[data])
  const inputs =[
    {
      label: "Email Address:",
      type : "email",
      name :"email",
      placeholder :"example@gmail.com"

      
    },
    {
      label: "Password:",
      type : "password",
      name :"password",
      placeholder :"**********"
    }

  ]
  return (
    <div>
      <LoginForm title="Login to Account" description = "Please enter your email and password to continue" 
      inputs={inputs} setData={setData} typeBtn="submit" valueBtn="Sign In" description2="Already have an account?" link="Creat an Account" path="/"/>
    </div>
  )
}


export default Login
