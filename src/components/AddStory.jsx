import profilePic from '../assets/images/pexels-olly-733872.jpg'

const AddStory = () => {
  return (
    <div className="aspect-square">
      <img src={profilePic} className='h-full rounded-full bg-cover outline outline-4 outline-offset-2 outline-rose-800' />
      <p className='text-center py-2 text-xl font-semibold'>Your story</p>
    </div>
  )
}

export default AddStory