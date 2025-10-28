import axios from "axios";
import {useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiAlertCircle } from "react-icons/fi";
import { Link} from "react-router-dom";
import { toast } from "react-toastify";
import { CiCircleCheck } from "react-icons/ci";
const Card = ({item ,setDeletedId}) => {
    const [showOverlay , setShowOverlay] =useState(false)



    const deletItem = (id) =>{
        setShowOverlay(true)
        toast.info(  
            <div className="flex flex-col items-center justify-center gap-5 h-30 w-full p-3  bg-white dark:bg-gray-500">
                <span className=" text-xl text-center font-medium text-gray-800 text-black dark:text-white">Are you sure to delete this product?</span>
                <div className="flex gap-7">
                    <button className="px-7 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 cursor-pointer"
                        onClick={()=>{
                            toast.dismiss()
                            setShowOverlay(false)
                        }}>
                        No
                    </button>

                    <button  className="px-7 py-1 text-white rounded bg-red-600 cursor-pointer hover:bg-gray-400 hover:text-black"
                    onClick={()=>{
                        toast.dismiss()
                        setShowOverlay(false)
                        axios.delete(`https://vica.website/api/items/${id}` ,{
                            headers :{
                                "Authorization" : "Bearer " + localStorage.getItem("token")
                            }
                        })
                        .then(
                            res=>{console.log(res)
                            setDeletedId(id)
                            toast.success(
                                <div className="flex items-center gap-2">
                                    <CiCircleCheck size={22} className="text-green-500" />
                                    <span className="text-black dark:text-white">Product deleted successfully!</span>
                                </div>,
                                {position: "top-right",
                                className :"bg-white text-green-700 border-b-2 border-green-500 rounder-lg shadow-md font-medium dark:bg-gray-500",
                                closeButton : true,
                                icon :false,
                                }
                            )
                            
                        })
                        
                        
                        .catch((err)=>{
                            toast.error(
                                <div className="flex items-center gap-2">
                                    <FiAlertCircle size={22} className="text-red-400"/>
                                    <span className="text-black dark:text-white">Something went wrong!</span>
                                </div>,
                                {position: "top-right",
                                className :"bg-white text-red-400 border-b-2 border-red-500 rounder-lg shadow-md font-medium dark:bg-gray-500",
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
                <div className="w-70 rounded-3xl bg-gray-200 dark:bg-gray-700 dark:text-white">
                    <div className="flex justify-center items-center mb-5 mt-3">
                        <img className="w-35 h-35 align-center rounded-3xl" src= {item.image_url} alt="watch" />
                    </div>
                    <div className=" pl-3 flex flex-col gap-1">
                        <h1 className="font-medium text-lg">{item.name}</h1>
                        <p className="text-blue-500 font-medium">${item.price}</p>
                        <div className="flex justify-between items-center mt-5 mb-3">
                            <button  className=" px-4 py-1 bg-gray-400 rounded-full text-center cursor-pointer  hover:shadow-[0_0_10px_#89CFF0] transition dark:bg-gray-500">
                                <Link to={`/product/edititem/${item.id}`}>Edit Product</Link></button>
                            <button onClick={()=>deletItem(item.id)} className="text-red-500 cursor-pointer mr-3 ">{<FaRegTrashCan size={25} />}</button>
                        </div>
                    </div>
                </div>
                {showOverlay &&(
                    <div className="fixed inset-0 bg-black z-40"style={{backgroundColor :"rgba(0,0,0,0.5)"}}></div>
                )}
            
            </>
        )
}

export default Card
