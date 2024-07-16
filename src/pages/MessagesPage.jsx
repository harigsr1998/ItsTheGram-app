import { IoArrowBackOutline } from "react-icons/io5"
import { FaRegEdit } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import storyThumbnail from '../assets/images/pexels-hasibullah-zhowandai-248954-819530.jpg'

const MessagesPage = () => {
  const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  const navigate = useNavigate()

  return (
    <div className="md:rounded-xl md:px-2 scroll-smooth">
      <div className="sticky top-0 bg-white md:rounded-xl md:pt-2">
        <div className="flex justify-between p-2 md:rounded-xl">
          <IoArrowBackOutline size={30} onClick={() => navigate(-1)} />
          <div className="flex">
            <h3 className="font-bold text-lg">User Name</h3>
            <IoIosArrowDown size={20} className="ml-1 self-center" />
          </div>
          <FaRegEdit size={30} />
        </div>
        <div className="flex justify-between mx-2">
          <p className="font-bold">Messages</p>
          <p className="text-blue-700">Request (1)</p>
        </div>
      </div>
      <div className="m-4">
        {stories.map(story => (
          <div className="flex gap-4 py-2" key={story}>
          <img src={storyThumbnail} className='h-16 w-16 rounded-full object-cover' />
          <div>
            <p className='py-2 font-semibold'>User name</p>
            <p className="text-sm">You: Hello</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default MessagesPage