import { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({title , description , inputs , setData , typeBtn , valueBtn , description2 , link ,path}) => {
    const [data , setLocatData]=useState({})
    const sentData =(event)=>{
        event.preventDefault()
        setData(data)
        console.log(data)
    }
    const [image, setImage] = useState(null)
    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if (file) {
        const imageURL = URL.createObjectURL(file)
        setImage(imageURL)
        setLocatData(prev=>({...prev, "profile_image":event.target.files[0]}))
        }
    }
    return (
        <form onSubmit={(event)=>sentData(event)} className="bg-white rounded-xl w-200 p-5 flex flex-col">
            <div className="flex flex-col items-center justify-center text-center gap-3 mb-7">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="text-md text-gray-600">{description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {inputs?.map((input , index)=>{
                    return(
                        <>
                            <div key={index}>
                                <label>{input?.label}</label>
                                <input className=" w-90 h-11 rounded-lg p-3 bg-gray-200 border border-blue-200 shadow-md focus:outline-none focus:ring-blue-400 focus:ring-2"  type= {input?.type} name= {input?.name} placeholder={input?.placeholder}
                                onChange={(event)=>setLocatData(prev=>({...prev,[input.name]:event.target.value}))}/>
                            </div>
                        </>
                    )
                })}
                <div className="flex flex-col gap-4" >
                    <label>Profile Image:</label>
                    <label className="w-30 h-30 cursor-pointer">
                        <img
                        src={image || "/api-project//assets/images/profile.png"}
                        alt="Avatar"
                        className="w-full h-full object-cover rounded-full border-4 border-gray-300 shadow-md hover:opacity-90 transition"/>
                        <input
                        type= "file"
                        name="profile_image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        />
                    </label>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <input className=" rounded-lg bg-blue-500 w-70 h-10 cursor-pointer transition-all duration-300 ease-in-out
                hover:shadow-md hover:scale-105" type= {typeBtn} value={valueBtn} />
                <div className="flex flex-row">
                    <p className="text-md text-gray-600">{description2}</p>
                    <Link className="text-blue-700 underline" to={path}>{link}</Link>
                </div>
            </div>
        </form>
    )
}

export default Form
