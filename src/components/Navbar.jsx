import { NavLink } from "react-router-dom"
import { HiHome, HiOutlineHome, HiOutlineSearch, HiSearch } from "react-icons/hi"
import { RiVideoLine, RiVideoFill } from "react-icons/ri"
import { IoPaperPlaneOutline } from "react-icons/io5"
import storyThumbnail from '../assets/images/pexels-hasibullah-zhowandai-248954-819530.jpg'

const Navbar = () => {
  const linkClass = (isActive) => 
    isActive 
    ? 'h-8 w-8 rounded-full object-cover outline outline-2 outline-rose-800' 
    : 'h-8 w-8 rounded-full object-cover'

  return (
    <nav 
      className="flex py-2 w-full justify-evenly border-t-2 bg-white sticky bottom-0 md:flex-col md:order-first md:border-r-2 md:px-4 md:justify-between md:h-[96vh]">
      <h2 className="text-2xl font-bold font-Oleo hidden md:inline-block">ItsTheGram</h2>
      <NavLink to={'/'}>
        {({isActive}) => (
          isActive ? <HiHome size={30} /> : <HiOutlineHome size={30} />
        )}
      </NavLink>
      <NavLink to={'/search'}>
        {({isActive}) => (
          isActive ? <HiSearch size={32} /> : <HiOutlineSearch size={30} />
        )}
      </NavLink>
      <NavLink to={'/reels'}>
        {({isActive}) => (
          isActive ? <RiVideoFill size={30} /> : <RiVideoLine size={30} />
        )}
      </NavLink>
      <NavLink to={'/messages'}>
        <IoPaperPlaneOutline size={30} />
      </NavLink>
      <NavLink to={'/profile'}>
        {({isActive}) => <img src={storyThumbnail} className={linkClass(isActive)} />}
      </NavLink>
    </nav>
  )
}

export default Navbar