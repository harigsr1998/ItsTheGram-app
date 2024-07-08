import { HiHome, HiOutlineSearch } from "react-icons/hi"
import { RiVideoLine } from "react-icons/ri"
import { IoPaperPlaneOutline } from "react-icons/io5"
import { RxAvatar } from "react-icons/rx"

const Navbar = () => {
  return (
    <nav className="flex py-4 w-full justify-evenly border-t-2">
      <a to={'/'}>
        <HiHome size={30} />
      </a>
      <a to={'/'}>
        <HiOutlineSearch size={30} />
      </a>
      <a to={'/'}>
        <RiVideoLine size={30} />
      </a>
      <a to={'/'}>
        <IoPaperPlaneOutline size={30} />
      </a>
      <a to={'/'}>
        <RxAvatar size={30} />
      </a>
    </nav>
  )
}

export default Navbar