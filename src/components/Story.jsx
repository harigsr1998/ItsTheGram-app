import storyThumbnail from '../assets/images/pexels-hasibullah-zhowandai-248954-819530.jpg'

const Story = () => {
  return (
    <div className="w-[16.2%] flex-shrink-0 aspect-square">
      <img src={storyThumbnail} className='h-full rounded-full bg-cover outline outline-2 outline-offset-1 outline-rose-800' />
    </div>
  )
}

export default Story