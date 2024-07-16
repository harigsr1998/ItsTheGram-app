import ProfilePageHeader from '../components/ProfilePageHeader'
import ProfilePageUserOverview from '../components/ProfilePageUserOverview'
import ProfilePageUserCounts from '../components/ProfilePageUserCounts'
import ProfilePageIconMenu from '../components/ProfilePageIconMenu'

const ProfilePage = () => {
  return (
    <div className='md:flex md:flex-col md:w-1/3'>
      <div className='sticky top-0 bg-white'>
        <ProfilePageHeader />
        <ProfilePageUserOverview />
        <ProfilePageUserCounts />
        <ProfilePageIconMenu />
      </div>
      <div className='h-screen'>
        {/* Content */}
        <div className="flex flex-col content-between">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage