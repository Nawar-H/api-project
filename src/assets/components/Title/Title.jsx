import { useNavigate } from "react-router-dom"




const Title = ({title , btn , icon}) => {
    const navigate =useNavigate()
    const moveAddItemPage=()=>{
        navigate("./additem")
    } 
    
    return (
        <div className=" ml-77 mt-30 flex  justify-between w-300">
            <h1 className="text-3xl font-bold"> {title}</h1>
            <button onClick={moveAddItemPage} className="rounded-lg bg-blue-500 w-50 h-10 cursor-pointer transition-all duration-300 ease-in-out
        flex flex-row items-center justify-center gap-2 text-white ml-6 mb-6 font-bold"
        >{icon}{btn}</button>
        </div>
    )
}

export default Title
