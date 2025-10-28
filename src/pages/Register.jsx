import { useEffect, useState } from "react"
import Form from "../assets/components/Form/Form"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { FiAlertCircle } from "react-icons/fi"
import { CiCircleCheck } from "react-icons/ci";

const Register = () => {
  const [data,setData] =useState({})
  const navigate = useNavigate()
    useEffect(()=>{
      if(data.first_name){
        if(data.password !== data.password_confirmation){
          toast.error(
            <div className="flex items-center gap-2">
              <FiAlertCircle size={22} className="text-red-500"/>
              <span className="text-black"> Password do not match!</span>
            </div>,
            {position: "top-right",
              className :"bg-white text-red-600 border-b-2 border-red-500 rounder-lg shadow-md font-medium dark:bg-white dark:text-red-400",
              closeButton : true,
              icon :false,
            }
          )
          return
        }
        axios.post("https://vica.website/api/register" , data , {
          headers :{
            "Content-Type" :"multipart/form-data",
            "Accept" : "application/json"
          }
        })
        .then((res)=>{
          toast.success(
            <div className="flex items-center gap-2">
              <CiCircleCheck size={22} className="text-green-500" /> 
              <span className="text-black">Account created successfully!</span>
            </div>,
            {position: "top-right",
              className :"bg-white text-green-700 border-b-2 border-green-500 rounder-lg shadow-md font-medium dark:bg-white dark:text-green-500",
              closeButton : true,
              icon :false,
              
            }
          )
        
          localStorage.setItem("token" , res.data.data.token)
          localStorage.setItem("user-data" , JSON.stringify(res.data.data.user))
          navigate("/product")
          
        })
        .catch((err)=>{
          toast.error(
            <div className="flex items-center gap-2">
              <FiAlertCircle size={22} className="text-red-400"/>
              <span className="text-black">Something went wrong!</span>
            </div>,
            {position: "top-right",
              className :"bg-white text-red-400 border-b-2 border-red-500 rounder-lg shadow-md font-medium dark:bg-white dark:text-red-400",
              closeButton : true,
              icon :false,
              hideProgressBar:false,
            }
          )
          console.log(err)
        })
      }
    },[data])
  const inputs =[
    {
      label: "First Name:",
      type : "text",
      name :"first_name",
      placeholder :"First Name"
    },
    {
      label: "Last Name:",
      type : "text",
      name :"last_name",
      placeholder :"Last Name"

    },
    {
      label: "User Name:",
      type : "text",
      name :"user_name",
      placeholder :"Username"

    },
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
    },
    {
      label: "Comfirmation Password:",
      type : "password",
      name :"password_confirmation",
      placeholder :"**********"
      
    }
  ]
  return (
    <div>
      <Form title="Create an Account" description = "Create a account to continue" 
      inputs={inputs} setData={setData} typeBtn="submit" valueBtn="Sign Up" description2="Already have an account?" link="Login" path="/login"/>
    </div>
  )
}

export default Register
