import ProfilePageHeader from '../components/ProfilePageHeader'
import ProfilePageUserOverview from '../components/ProfilePageUserOverview'
import ProfilePageUserCounts from '../components/ProfilePageUserCounts'
import ProfilePageIconMenu from '../components/ProfilePageIconMenu'

const ProfilePage = () => {
  return (
    <div className='md:flex md:flex-col bg-white md:pt-8'>
      <div className='md:border-t-2 md:border-r-2 md:border-l-2 md:overflow-hidden md:rounded-s-xl md:rounded-e-xl'>
        <div className='sticky top-0 md:top-8 bg-white'>
          <ProfilePageHeader />
          <ProfilePageUserOverview />
          <ProfilePageUserCounts />
          <ProfilePageIconMenu />
        </div>
        <div className='h-[300px] flex justify-center'>
          {/* Content */}
          <div className="content-center">
            Nothing posted yet
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage