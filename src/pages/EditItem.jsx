import { useEffect, useState } from "react"
import Continer from "../assets/components/Continer/Continer"
import ProductForm from "../assets/components/ProductForm/ProductForm"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import { CiCircleCheck } from "react-icons/ci"

const EditItem = () => {
    const navigate = useNavigate()
    const params =useParams()
    console.log(params)
    const [item,setItem] =useState({})
    const [data,setData] =useState({})
    
        useEffect(()=>{
                axios.get(`https://vica.website/api/items/${params.id}` , {
                    headers :{
                        "Authorization" : "Bearer " + localStorage.getItem("token")
                    }
                })
                .then((res)=>{
                setItem(res.data)
                
                })
                .catch((err)=>{
                    
                console.log(err)
                })
            },[])

            useEffect(()=>{
                        axios.post( `https://vica.website/api/items/${params.id}`,{ 
                            name : data.name? data.name : item.name,
                            price : data.price? data.price : item.price,
                            image : data.image,
                            _method :"PUT"

                        } , {
                        headers :{
                            "Authorization" : "Bearer " + localStorage.getItem("token"),
                            "Content-Type" :"multipart/form-data"
                        }
                    })
                    .then((res)=>{
                        toast.success(
                            <div className="flex items-center gap-2">
                                <CiCircleCheck size={22} className="text-green-500" />
                                <span className="text-black dark:text-white">Product updated successfully!</span>
                            </div>,
                            {position: "top-right",
                            className :"bg-white text-green-700 border-b-2 border-green-500 rounder-lg shadow-md font-medium  dark:bg-gray-500",
                            closeButton : true,
                            icon :false,
                            }
                        )
                        navigate("/product")
                    })
                    .catch((err)=>{
                    
                    console.log(err)
                    })
            },[data])
        
        
        const items =[
            {
                label :"Product Name:",
                type :"text",
                name :"name",
                placeholder :"Enter Product Name",
                value : item.name
            },
            {
                label :"Product Price:",
                type :"text",
                name :"price",
                placeholder :"Enter Product Price",
                value : item.price
            }
        ]
        return (
            <div>
                <Continer>
                        <ProductForm  title ="Edit Product"  items ={items} typeBtn="submit" valueBtn="Update" setData={setData} item={item}  />
                </Continer>
            </div>
        )
    
}

export default EditItem



