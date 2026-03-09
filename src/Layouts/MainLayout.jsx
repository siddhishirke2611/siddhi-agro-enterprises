import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import FloatingButton from '../components/FloatingButton/FloatingButton'

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            {/* <FloatingButton/> */}
        </div>
    )
}

export default MainLayout