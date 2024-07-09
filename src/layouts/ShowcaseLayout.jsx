import { Outlet } from "react-router-dom"

const ShowcaseLayout = () => {
  return (
    <div className="bg-slate-950">
      <div className="mx-auto bg-white h-[1830px] aspect-[412/915] rounded-2xl flex flex-col justify-between outline outline-2 outline-rose-800">
        <Outlet />
      </div>
    </div>
  )
}

export default ShowcaseLayout