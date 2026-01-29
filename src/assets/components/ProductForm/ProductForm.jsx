import { useState } from "react"


const ProductForm = ({title ,items, valueBtn ,typeBtn ,setData,item}) => {
    
    const imagValue =item&& item.image_url
    
    const [data , setLocalData]=useState({})
    const sentData =(event)=>{
        event.preventDefault()
        setData(data)
        console.log(data)
    }
    const [uploadImage, setUploadImage] = useState(null)
        const handleImageChange = (event) => {
            const file = event.target.files[0]
            if (file) {
            const imageURL = URL.createObjectURL(file)
            setUploadImage(imageURL)
            setLocalData(prev=>({...prev, "image":event.target.files[0]}))
            }
        }
    return (
        <form onSubmit={(event)=>sentData(event)} className="ml-75 mt-25 flex justify-between items-center w-full ">
            <div>
                <h1 className="text-3xl font-bold mb-10">{title}</h1>
                <div className=" flex flex-col gap-13">
                    {items?.map((item ,index)=>{
                        return(
                            <>
                                <div key={index} className="flex flex-col gap-3">
                                    <label >{item?.label}</label>
                                    <input className=" w-100 h-11 rounded-lg p-3 bg-gray-200 border border-blue-200 shadow-md focus:outline-none focus:ring-blue-400 focus:ring-2 dark:bg-gray-500 dark:text-white"
                                    type={item?.type} name={item?.name} placeholder={item?.placeholder} defaultValue={item.value}
                                    onChange={(event)=>setLocalData(prev=>({...prev,[item.name]:event.target.value}))}/>
                                </div>
                            </>
                        )
                    })}
                    <input className=" rounded-lg bg-gray-300 w-50 h-10 cursor-pointer transition-all duration-300 ease-in-out  hover:shadow-[0_0_10px_#89CFF0] transition dark:bg-gray-500"
                    type={typeBtn} value={valueBtn}/> 
                    
                </div>
            </div>
            <label className=" w-100 h-60 cursor-pointer bg-[url('/api-project//assets/images/upload-image.jpg')] bg-cover bg-center rounded-2xl">
                <img 
                src= {uploadImage ||imagValue}
                className=" w-full h-full  border-2 border-dashed border-blue-400 shadow-md hover:opacity-90 transition rounded-2xl" />
                <input
                type= "file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                
                
                />
            </label>
        </form>
    )
}

export default ProductForm
