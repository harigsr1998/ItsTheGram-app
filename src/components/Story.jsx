import storyThumbnail from '../assets/images/pexels-hasibullah-zhowandai-248954-819530.jpg'

const Story = () => {
  return (
    <div className="aspect-square">
      <img src={storyThumbnail} className='h-full rounded-full bg-cover outline outline-4 outline-offset-2 outline-rose-800' />
      <p className='text-center py-2 text-xl font-semibold'>user name</p>
    </div>
  )
}

export default Story