import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Continer from "../assets/components/Continer/Continer"
import Card from "../assets/components/Card/Card"
import Title from "../assets/components/Title/Title"
import { CiCirclePlus } from "react-icons/ci";
import { userContext } from "../App"
import { toast } from "react-toastify"

const ListItem = () => {
    const [items , setItem] = useState([])
    const [loading ,setLoading] = useState(true)
    const [deletedId ,setDeletedId] = useState(0)
    const {searchValue} =useContext(userContext)

    useEffect(()=>{
        axios.get("https://vica.website/api/items",{
            headers :{
                "Authorization" : "Bearer " + localStorage.getItem("token"),
                "Accept" : "application/json" 
            }
        })
        .then((res) =>{
            
            setItem(res.data)
            setLoading(false)
        })
        
        .catch( err=>console.log(err))
        
    },[deletedId])

    

    const filteredItem = searchValue ?items.filter((item)=>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    ):items

    if(loading){
        return(
            <div className="flex items-center justify-center h-screen w-screen">
                <span className="text font-bold text-4xl">There are no products....</span>
            </div>
        )
    }
    return (
            <Continer>
                <Title title="All Products" btn="Create Product" icon={<CiCirclePlus size={25} />}/>
                <div className=" ml-78 mt-10 grid grid-cols-4 gap-5">
                    {filteredItem.length >0 ?(
                        filteredItem.map((item , index)=>(
                        <Card item={item} key={index} setDeletedId={setDeletedId}/>
                        ))
                    ) :(
                    <div className="flex items-center justify-center  w-100">
                            <p className=" text-3xl text-red-400 text-center font-bold">{searchValue ? "No matching proudct found..." : "No product available yet.."}</p>
                    </div>
                    )}
                </div>
            </Continer>
    )
}

export default ListItem
