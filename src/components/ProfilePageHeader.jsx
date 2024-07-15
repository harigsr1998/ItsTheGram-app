import { IoSettingsOutline } from "react-icons/io5"
import { FaThreads } from "react-icons/fa6"
import { IoIosArrowDown } from "react-icons/io"

const ProfilePageHeader = () => {
  return (
    <div className="flex justify-between py-2 px-4 border-b-2">
      <IoSettingsOutline size={30} />
      <div className="flex">
        <h3>Username</h3>
        <IoIosArrowDown size={15} className="ml-1 mt-1" />
      </div>
      <FaThreads size={30} />
    </div>
  )
}

export default ProfilePageHeader