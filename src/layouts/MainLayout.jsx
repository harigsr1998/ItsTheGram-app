import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MessagesPage from '../pages/MessagesPage'
import { useLocation } from 'react-router-dom'

const MainLayout = () => {
  const { pathname } = useLocation()

  return (
    <div className='h-screen w-screen flex flex-col md:flex-row font-sans'>
      <div id='outlet' className='h-screen md:overflow-x-hidden md:grid md:grid-cols-2'>
        <div className='' id='div above outlet'>
          <Outlet />
        </div>
        {pathname !== '/messages' &&
          <div className='hidden md:block md:h-[90vh] md:overflow-y-scroll no-scrollbar md:border-2 md:rounded-xl md:mt-8 md:mx-8 md:sticky md:top-8'>
            <MessagesPage />
          </div>
        }
      </div>
      {pathname !== '/messages' &&
        <div className='md:order-first md:h-screen fixed w-full md:max-w-60 md:static bottom-0 md:bottom-auto'>
          <Navbar />
        </div>
      }
    </div>
  )
}

export default MainLayout