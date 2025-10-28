import SideBar from '../assets/components/SideBar/SideBar'
import { AiOutlineProduct } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { PiListChecksLight } from "react-icons/pi";
import { FaPowerOff } from "react-icons/fa6";
import NavBar from '../assets/components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
const Product = () => {
    const items =[
        {
            icon :<AiOutlineProduct />,
            content :"Products",
            url :"/product"
        },
        {
            icon :<GrFavorite />,
            content :"Favorites",
            url :"/favorite"
        },
        {
            icon :<PiListChecksLight />,
            content : "Order Lists",
            url :"/orderList"
        }
    ]

    return (
        <>
            <NavBar/>
            <div className='flex dark:bg-gray-900 dark:text-white min-h-screen  max-w-screen'>
                <SideBar
                    logo1 = "Dash" logo2 ="Stack"
                    items ={items}
                    btn = "LogOut"
                    iconBtn = {<FaPowerOff />}
                />
                <Outlet/>
            </div>
            
        </>
    )
}

export default Product
