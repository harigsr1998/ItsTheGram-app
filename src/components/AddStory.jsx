import profilePic from '../assets/images/pexels-olly-733872.jpg'
import { AiFillPlusCircle } from "react-icons/ai"

const AddStory = () => {
  return (
    <div className='h-16 rounded-full bg-gray-500'>
      <AiFillPlusCircle size={20} className='fill-blue-600 ml-11 mt-11' />
      <p className='text-center py-2 text-xs font-semibold'>Your story</p>
    </div>
  )
}

export default AddStory