import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MessagesPage from '../pages/MessagesPage'

const MainLayout = () => {
  return (
    <div className='h-screen w-screen flex flex-col md:flex-row font-sans'>
      <div id='outlet' className='md:w-full h-screen md:overflow-x-hidden md:grid md:grid-cols-2'>
        <div className=''>
          <Outlet />
        </div>
        <div className='hidden md:block md:h-[90vh] md:overflow-y-scroll no-scrollbar md:border-2 md:rounded-xl md:mt-8 md:mx-8 md:sticky md:top-8'>
          <MessagesPage />
        </div>
      </div>
      <div className='md:order-first md:h-screen fixed w-full md:w-auto md:static bottom-0 md:bottom-auto'>
        <Navbar />
      </div>
    </div>
  )
}

export default MainLayout