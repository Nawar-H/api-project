import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = ({title , description , inputs , setData , typeBtn , valueBtn , description2 , link ,path}) => {
    const [data , setLocatData]=useState({})
    const sentData =(event)=>{
        event.preventDefault()
        setData(data)
        console.log(data)
    }
    return (
        <form onSubmit={(event)=>sentData(event)} className="bg-white rounded-xl w-200 p-5 flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center text-center gap-3 mb-7">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="text-md text-gray-600">{description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {inputs?.map((input , index)=>{
                    return(
                        <>
                            <div className="flex flex-col justify-center gap-2" key={index}>
                                <label>{input?.label}</label>
                                <input className=" w-full h-11 rounded-lg p-3 bg-gray-200 border border-blue-200 shadow-md focus:outline-none focus:ring-blue-400 focus:ring-2 "  type= {input?.type} name= {input?.name} placeholder={input?.placeholder}
                                onChange={(event)=>setLocatData(prev=>({...prev,[input.name]:event.target.value}))}/>
                            </div>
                        </>
                    )
                })}
                </div>
            <div className="flex flex-col items-center justify-center gap-5">
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

export default LoginForm
