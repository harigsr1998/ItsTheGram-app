import { NavLink } from "react-router-dom"
import { HiHome, HiOutlineHome, HiOutlineSearch, HiSearch } from "react-icons/hi"
import { RiVideoLine, RiVideoFill } from "react-icons/ri"
import { IoPaperPlaneOutline } from "react-icons/io5"
import profilePic from '../assets/images/pexels-olly-733872.jpg'

const Navbar = () => {
  const profileIconClass = (isActive) => 
    isActive 
    ? 'h-8 w-8 rounded-full object-cover outline outline-2 outline-rose-800' 
    : 'h-8 w-8 rounded-full object-cover';

  const profileTextClass = (isActive) =>
    isActive
    ? 'text-2xl hidden md:inline-block md:ml-2 font-bold'
    : 'text-2xl hidden md:inline-block md:ml-2'

  return (
    <nav 
      className="bg-white flex md:flex-col md:px-6 md:gap-8 md:h-screen justify-around border-t-2 py-2 md:border-none md:min-w-56">
      <NavLink to={'/'} className='hidden md:inline-block'>
        <h2 className="text-4xl font-bold font-Oleo text-rose-700">ItsTheGram</h2>
      </NavLink>
      <NavLink to={'/'} className="flex">
        {({isActive}) => (
          isActive ? (
            <div className="flex">
              <HiHome size={30} />
              <h2 className="text-2xl font-bold hidden md:inline-block md:ml-2">Home</h2>
            </div>
          ) : (
            <div className="flex">
              <HiOutlineHome size={30} />
              <h2 className="text-2xl hidden md:inline-block md:ml-2">Home</h2>
            </div>
        ))}
      </NavLink>
      <NavLink to={'/search'}>
        {({isActive}) => (
          isActive ? (
            <div className="flex">
              <HiSearch size={32} />
              <h2 className="text-2xl font-bold hidden md:inline-block md:ml-2">Search</h2>
            </div>
          ) : (
            <div className="flex">
              <HiOutlineSearch size={30} />
              <h2 className="text-2xl hidden md:inline-block md:ml-2">Search</h2>
            </div>
        ))}
      </NavLink>
      <NavLink to={'/reels'} className='md:hidden'>
        {({isActive}) => (
          isActive ? <RiVideoFill size={30} /> : <RiVideoLine size={30} />
        )}
      </NavLink>
      <NavLink to={'/messages'}>
        <div className="flex">
          <IoPaperPlaneOutline size={30} />
          <h2 className="text-2xl hidden md:inline-block md:ml-2">Messages</h2>
        </div>
      </NavLink>
      <NavLink to={'/profile'}>
        {({isActive}) => (
          <div className="flex">
            <img src={profilePic} className={profileIconClass(isActive)} />
            <h2 className={profileTextClass(isActive)}>My Account</h2>
          </div>
        )}
      </NavLink>
    </nav>
  )
}

export default Navbar