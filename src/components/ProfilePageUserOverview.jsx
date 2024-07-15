import storyThumbnail from '../assets/images/pexels-hasibullah-zhowandai-248954-819530.jpg'

const ProfilePageUserOverview = () => {
  return (
    <div className="flex gap-4 py-2 px-4 border-b-2">
      <div>
        <img src={storyThumbnail} className='h-16 w-16 rounded-full object-cover' />
        <p className="mt-2">Username</p>
      </div>
      <div className="w-full">
        <p className='py-2 font-semibold'>User name</p>
        <div>
          <button className=" rounded-lg bg-gray-500 text-white px-4 py-1 text-sm">Edit Profile</button>
          <button className="ml-2 rounded-lg bg-gray-500 text-white px-4 py-1 text-sm">View archive</button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePageUserOverview