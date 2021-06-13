import { useState } from 'react'
import { pageRoutes } from '../../../lib/routes'
import { navKeys } from '../../../lib/types'

const Header = ({ selectedKey }: { selectedKey: navKeys }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const getSelectedDesktop = (key: navKeys) => {
    if (key === selectedKey) return 'bg-primary text-gray-dark px-3 py-2 rounded-md text-sm font-medium'
    return 'text-white hover:bg-offw hover:text-gray-dark px-3 py-2 rounded-md text-sm font-medium'
  }
  const getSelectedMob = (key: navKeys) => {
    if (key === selectedKey) return 'text-gray-dark block px-3 py-2 rounded-md text-base font-medium'
    return 'text-white hover:bg-offw hover:text-gray-dark block px-3 py-2 rounded-md text-base font-medium'
  }

  return (
    <>
      <div className='h-16 md:h-0' />
      <nav
        className={`${
          menuOpen ? 'inset-0 z-40 bg-secondary bg-opacity fixed opacity-75' : null
        } bg-secondary fixed md:relative`}
      >
        <div className='px-4 sm:px-6 lg:px-8 '>
          {/* if not visible then remove grid and justify huhu */}
          <div className='h-16 grid md:justify-items-center'>
            <div className='flex items-center'>
              <div className='hidden md:block'>
                <div className='space-x-4 '>
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <a href={pageRoutes.home} className={getSelectedDesktop('home')}>
                    Home
                  </a>
                  <a href={pageRoutes.about} className={getSelectedDesktop('about')}>
                    About
                  </a>
                  <a href={pageRoutes.writing} className={getSelectedDesktop('writing')}>
                    Writing
                  </a>
                </div>
              </div>
            </div>

            <div className='-mr-2 flex md:hidden'>
              {/* <!-- Mobile menu button --> */}
              <button
                onClick={() => {
                  setMenuOpen(!menuOpen)
                }}
                className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              >
                <span className='sr-only'>Open main menu</span>
                {/* <!--Heroicon name: menu Menu open: "hidden", Menu closed: "block" --> */}
                <svg
                  className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                </svg>
                {/* <!--Heroicon name: x Menu open: "block", Menu closed: "hidden" --> */}
                <svg
                  className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!--Mobile menu, Open: "block", closed: "hidden"--> */}
        <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a href={pageRoutes.home} className={getSelectedMob('home')}>
              Home
            </a>
            <a href={pageRoutes.about} className={getSelectedMob('about')}>
              About
            </a>
            <a href={pageRoutes.writing} className={getSelectedMob('writing')}>
              Writing
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
