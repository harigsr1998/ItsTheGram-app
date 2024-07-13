import profilePic from '../assets/images/pexels-olly-733872.jpg'
import { AiFillPlusCircle } from "react-icons/ai"

const AddStory = () => {
  return (
    <div className='relative'>
      <img src={profilePic} className='h-16 rounded-full bg-cover outline outline-4 outline-offset-2 outline-rose-800' />
      <p className='text-center py-2 text-xs font-semibold'>Your story</p>
      <AiFillPlusCircle size={20} className='absolute right-0 bottom-6 fill-blue-600' />
    </div>
  )
}

export default AddStory