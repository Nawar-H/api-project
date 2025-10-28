
import { useContext } from "react";
import {BiMoon, BiSearch } from "react-icons/bi";
import { GrSun } from "react-icons/gr";
import { userContext } from "../../../App";



const NavBar = () => {
    const {theme , setTheme,searchValue ,setSearchValue} =useContext(userContext)
    
    const userData = JSON.parse(localStorage.getItem("user-data"))
    
    return (
        
        <nav className="fixed top-0 left-70 w-320 h-20 flex items-center justify-between px-4 md:px-6 z-10 bg-gray-200 dark:bg-gray-700 dark:text-white">
            <div className="flex-1 max-w-lg">
                <div className="relative flex items-center">
                    <input type="search" placeholder="Search a Product..."
                    value={searchValue}
                    onChange={(e)=>{
                        setSearchValue(e.target.value)
                    }}
                    className="pl-10 px-8 h-10 w-80 dark:bg-gray-500 dark:text-white bg-gray-300 rounded-full focus:outline-none focus:ring-blue-400 focus:ring-2"
                    
                    />
                    <BiSearch className="absolute left-3 top-3 transform-translate-y-2 text-gray-400 dark:text-black " size={20}/>
                </div>
            </div>
            <div className="flex item-center gap-2  ml-4">
                <div className="flex items-center gap-4 border-r-3 pr-5 ">
                    <img src={userData.profile_image_url} alt="profile" className="w-12 h-12 rounded-full object-cover"/>
                    <div className="flex flex-col  ">
                        <span className="font-medium">{userData.first_name} <span>{userData.last_name}</span></span>
                        <span className="font-medium">{userData.user_name}</span>
                    </div>
                </div>
                <button onClick={()=>setTheme(!theme)} className=" mr-7 cursor-pointer rounded-md dark:text-black">
                    {theme? <GrSun size={30} className=" dark:text-white"/> : <BiMoon size={30}/>}
                </button>
            </div>
        </nav>
    
    )
}

export default NavBar
