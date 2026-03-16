import React from 'react'
import TopBar from '../components/TopBar/TopBar'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/Sidebar/SideBar'

const DashBoardLayout = () => {
    return (
        <div style={{ display: "flex" }}>

        <SideBar/>

            <div style={{ flex: 1 }}>
                <TopBar />
                <Outlet />
            </div>

        </div>
    )
}

export default DashBoardLayout