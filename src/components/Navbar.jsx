import { NavLink } from "react-router-dom"
import { HiHome, HiOutlineSearch } from "react-icons/hi"
import { RiVideoLine } from "react-icons/ri"
import { IoPaperPlaneOutline } from "react-icons/io5"
import { RxAvatar } from "react-icons/rx"

const Navbar = () => {
  return (
    <nav 
      className="flex py-2 w-full justify-evenly border-t-2 bg-white sticky bottom-0"
      /* className="md:flex-col md:left-0 md:w-fit md:h-[100svh]"*/ >
      <NavLink to={'/'}>
        <HiHome size={30} />
      </NavLink>
      <NavLink to={'/search'}>
        <HiOutlineSearch size={30} />
      </NavLink>
      <NavLink to={'/reels'}>
        <RiVideoLine size={30} />
      </NavLink>
      <NavLink to={'/messages'}>
        <IoPaperPlaneOutline size={30} />
      </NavLink>
      <NavLink to={'/profile'}>
        <RxAvatar size={30} />
      </NavLink>
    </nav>
  )
}

export default Navbar