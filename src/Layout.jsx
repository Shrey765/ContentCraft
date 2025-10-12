import { Outlet } from "react-router-dom"
import SideBar from "./components/sildeBar/SideBar.jsx"

export default function Layout(){
    return(
        <>
        <SideBar />
        <Outlet />
        </>
    )
}