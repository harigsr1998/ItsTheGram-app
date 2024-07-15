import { MdGridOn, MdOutlineSplitscreen, MdBookmarkBorder, MdOutlineAssignmentInd } from "react-icons/md"

const ProfilePageIconMenu = () => {
  return (
    <div className="flex justify-between px-6 py-2 border-b-2">
      <MdGridOn size={30} />
      <MdOutlineSplitscreen size={30} />
      <MdBookmarkBorder size={30} />
      <MdOutlineAssignmentInd size={30} />
    </div>
  )
}

export default ProfilePageIconMenu