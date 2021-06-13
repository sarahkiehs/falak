import { pageRoutes } from '../../../lib/routes'

const Footer = () => {
  return (
    <nav className='bg-yellow grid justify-items-center'>
      <div className=' max-w-7xl text-white text-sm font-medium p-6 sm:px-6 lg:px-8 grid grid-cols-4 gap-4'>
        <div className='col-span-1'>
          <a href={pageRoutes.home}>Home</a>
        </div>
        <div className='col-span-1'>
          <a href={pageRoutes.about}>About</a>
        </div>
        <div className='col-span-1'>
          <a href='https://www.instagram.com/testtststst/' target='_blank' rel='noopener noreferrer'>
            @falak
          </a>
        </div>
        <div className='col-span-1'>
          <a href={pageRoutes.writing}>Writing</a>
        </div>
      </div>
    </nav>
  )
}

export default Footer
