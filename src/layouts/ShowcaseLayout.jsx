import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const ShowcaseLayout = () => {
  return (
    <div className="bg-slate-400 h-[100vh]">
      <div className="mx-auto bg-white h-[100vh] aspect-[412/915] rounded-2xl flex flex-col justify-between">
        <Outlet />
        <Navbar />
      </div>
    </div>
  )
}

export default ShowcaseLayout