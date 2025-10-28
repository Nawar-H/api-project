import SideBar from '../assets/components/SideBar/SideBar'
import { AiOutlineProduct } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { PiListChecksLight } from "react-icons/pi";
import { FaPowerOff } from "react-icons/fa6";
import NavBar from '../assets/components/NavBar/NavBar';

const Favorite = () => {
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
            <SideBar
                logo1 = "Dash" logo2 ="Stack"
                items ={items}
                btn = "LogOut"
                iconBtn = {<FaPowerOff />}
            />
            <NavBar/>
            
            
            
        </>
    )
}
export default Favorite
