import { Outlet } from "react-router-dom";
import {Header} from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import './Content.css'


function Layout() {
    return(
    <>
        <Header />
        <Sidebar />
        <main className="content">
            <Outlet />
        </main>
    </>
    )
}

export default Layout