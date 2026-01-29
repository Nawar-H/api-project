import axios from "axios"
import { useState } from "react"
import { CiCircleCheck } from "react-icons/ci"
import { FaPowerOff } from "react-icons/fa6"
import { FiAlertCircle } from "react-icons/fi"
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
const SideBar = ({logo1 , logo2 , items }) => {
    const [showOverlay , setShowOverlay] =useState(false)
    const navigate = useNavigate()

    const logOut =()=>{
        setShowOverlay(true)
        toast.info(  
            <div className="flex flex-col items-center justify-center gap-5 h-30 w-full p-3  bg-white dark:bg-gray-500">
                <span className=" text-xl text-center font-medium text-gray-800 text-black dark:text-white">Do you want to logout?</span>
                <div className="flex gap-7">
                    <button className="px-7 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 cursor-pointer"
                        onClick={()=>{
                            toast.dismiss()
                            setShowOverlay(false)
                        }}>
                        No
                    </button>

                    <button  className="px-7 py-1 text-white rounded bg-blue-500 cursor-pointer hover:bg-gray-400 hover:text-black"
                    onClick={()=>{
                        toast.dismiss()
                        setShowOverlay(false)
                        axios.post("https://vica.website/api/logout", null ,{ 
                            headers :{
                                "Authorization" : "Bearer " + localStorage.getItem("token"),
                                "Accept" : "application/json"
                            }
                        })
                        .then(
                            res=>{
                                console.log(res)
                                navigate("/login")
                                toast.success(
                                    <div className="flex items-center gap-2">
                                        <CiCircleCheck size={22} className="text-green-400"/>
                                        <span className="text-black dark:text-white">Logged out successfully!</span>
                                    </div>,
                                    {position: "top-right",
                                    className :"bg-white text-green-400 border-green-500 rounder-lg shadow-md font-medium dark:bg-gray-500",
                                    closeButton : true,
                                    icon :false,
                                    hideProgressBar:false,
                                    }
                                )   
                            }
                        )
                            
                        
                        .catch((err)=>{
                            toast.error(
                                <div className="flex items-center gap-2">
                                    <FiAlertCircle size={22} className="text-red-400"/>
                                    <span className="text-black dark:text-white">Something went wrong!</span>
                                </div>,
                                {position: "top-right",
                                className :"bg-white text-red-400 border-red-500 rounder-lg shadow-md font-medium dark:bg-gray-500",
                                closeButton : true,
                                icon :false,
                                hideProgressBar:false,
                                }
                            )
                            console.log(err)
                        })
                    }}>Yes
                    </button>
                </div>
            </div>
            ,
            {
                position :"top-center",
                className :"bg-white rounder-lg shadow-md font-medium dark:bg-gray-500",
                autoClose:false,
                closeOnClick:false,
                draggable:false,
                icon :false,
                closeButton :false,
            }
        
        )
    }

    return (
        <>
            <nav className="bg-gray-200 w-70 min-h-screen flex flex-col justify-between fixed dark:bg-gray-700 dark:text-white">
                <div className="flex flex-col gap-7">
                    <h1 className="text-3xl font-bold pl-6 pt-6">{logo1} <span className="text-blue-500">{logo2}</span></h1>
                    <div className="flex flex-col   gap-6">
                        {items?.map((item , index)=>{
                            return(
                                <ul key={index}>
                                    <li>
                                        <NavLink to={item?.url} className={({isActive})=>
                                        ` flex flex-row items-center gap-3 font-medium pl-6 ${ isActive ?"border-l-4 border-blue-500 text-lg shadow-md":""}`}>
                                            {item.icon}{item.content}
                                        </NavLink>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
                <button onClick={logOut} className="rounded-lg bg-blue-500 w-50 h-10 cursor-pointer transition-all duration-300 ease-in-out
                    flex flex-row items-center justify-center gap-2 text-white ml-6 mb-6 font-bold">
                    <FaPowerOff size={15} /> LogOut 
                </button>
            </nav>
            {showOverlay &&(
                <div className="fixed inset-0 bg-black z-40"style={{backgroundColor :"rgba(0,0,0,0.5)"}}></div>
            )}
        </>
    )
}

export default SideBar
