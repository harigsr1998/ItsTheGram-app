import profilePic from '../assets/images/pexels-olly-733872.jpg'

const AddStory = () => {
  return (
    <div className="w-[16.2%] flex-shrink-0 aspect-square">
      <img src={profilePic} className='h-full rounded-full bg-cover outline outline-2 outline-offset-1 outline-rose-800' />
    </div>
  )
}

export default AddStory