import Sidebar from './sidebar'
import Header from './header'
import Body from './body'

const MainLayout = () => {
  return (
    <div className='flex h-screen bg-gray-50'>
        <Sidebar />
        <div className='flex flex-col flex-1 overflow-hidden'>
          <Header />

          <main className='flex-1 overflow-y-auto p-4'>
            <Body />
          </main>
        </div>
    </div>
  )
}

export default MainLayout