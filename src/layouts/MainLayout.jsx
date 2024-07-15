import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div className="h-screen w-full flex justify-between flex-col md:flex-row">
      <div>
        <Outlet />
      </div>
      <Navbar />
    </div>
  )
}

export default MainLayout