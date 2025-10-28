import { Outlet } from "react-router-dom"



const AuthPage = () => {
    return (
        <div className="bg-[url('/assets/images/bg-img.jpg')] bg-cover bg-no-repeat  min-h-screen
        flex items-center justify-center">
            <Outlet/>
            
            
        </div>
    )
}

export default AuthPage
