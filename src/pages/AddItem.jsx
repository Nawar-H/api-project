import { useEffect, useState } from "react"
import Continer from "../assets/components/Continer/Continer"
import ProductForm from "../assets/components/ProductForm/ProductForm"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import { FiAlertCircle } from "react-icons/fi"
import { CiCircleCheck } from "react-icons/ci"


const AddItem = () => {
    const [data,setData] =useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        if(data.name){
            axios.post("https://vica.website/api/items" , data , {
                headers :{
                    "Content-Type" :"multipart/form-data",
                    "Authorization" : "Bearer " + localStorage.getItem("token")
                }
            })
            .then((res)=>{
            toast.success(
                <div className="flex items-center gap-2  ">
                    <CiCircleCheck size={22} className="text-green-500" />
                    <span className="text-black dark:text-white">Product added successfully!</span>
                </div>,
                {position: "top-right",
                className :"bg-white text-green-700 border-b-2 border-green-500 rounder-lg shadow-md font-medium dark:bg-gray-500  ",
                closeButton : true,
                icon :false,
                }
            )
            navigate("/product")
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
        }
        },[data])
    
    
    const items =[
        {
            label :"Product Name:",
            type :"text",
            name :"name",
            placeholder :"Enter Product Name"
        },
        {
            label :"Product Price:",
            type :"text",
            name :"price",
            placeholder :"Enter Product Price"
        }
    ]
    return (
        <div>
            <Continer>
                    <ProductForm  title ="Create Product"  items ={items} typeBtn="submit" valueBtn="Create" setData={setData}  />
            </Continer>
        </div>
    )
}

export default AddItem
