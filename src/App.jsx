import AuthPage from './pages/AuthPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Product from './pages/Product'
import Favorite from './pages/Favorite'
import OrderList from './pages/OrderList'
import ListItem from './pages/ListItem'
import AddItem from './pages/AddItem'
import EditItem from './pages/EditItem'
import {  Route, Routes } from 'react-router-dom'
import ToastManger from './assets/components/ToastManger/ToastManger'
import { createContext, useState } from 'react'

export const userContext =createContext()
const App = () => {
    const [theme ,setTheme] =useState(false)
    const [searchValue ,setSearchValue] =useState("")

    return (
        <>
        
        <div className={theme?"dark" :""}>
            
        <userContext.Provider value={{theme , setTheme,searchValue ,setSearchValue}}> 
        <Routes>
            <Route path="/" element ={<AuthPage/>}>
                <Route path="" element ={<Register/>}/> 
                <Route path="/login" element ={<Login/>}/>
            </Route>
            <Route path="/product" element ={<Product/>}>
                <Route path="" element ={<ListItem/>}/>
                <Route path="additem" element ={<AddItem/>}/>
                <Route path="edititem/:id" element ={<EditItem/>}/> 
            </Route>
            <Route path ="/favorite" element ={<Favorite/>}/>
            <Route path ="/orderlist" element ={<OrderList/>}/>
        </Routes>
        <ToastManger/>
        </userContext.Provider>
      </div>
        </>
    )
}

export default App