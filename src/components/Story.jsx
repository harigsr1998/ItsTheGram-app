import storyThumbnail from '../assets/images/pexels-hasibullah-zhowandai-248954-819530.jpg'

const Story = () => {
  return (
    <div>
      <img src={storyThumbnail} className='h-16 w-16 rounded-full object-cover outline outline-4 outline-offset-2 outline-rose-800' />
      <p className='text-center py-2 text-xs font-semibold'>user name</p>
    </div>
  )
}

export default Story