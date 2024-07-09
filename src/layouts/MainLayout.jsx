import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  )
}

export default MainLayout