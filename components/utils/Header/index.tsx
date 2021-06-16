import { useState } from 'react'
import { pageRoutes } from '../../../lib/routes'
import { navKeys } from '../../../lib/types'

import { FaHome, FaPen, FaBook, FaEnvelope } from 'react-icons/fa'

const Header = ({ selectedKey }: { selectedKey: navKeys }) => {
  const getSelectedDesktop = (key: navKeys) => {
    if (key === selectedKey) return 'bg-secondary text-white text-lg py-2 grid'
    return 'text-white hover:bg-white hover:text-black text-lg py-2 grid'
  }
  return (
    <>
      <nav className='bg-primary grid grid-cols-4 text-center'>
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <a href={pageRoutes.home} className={getSelectedDesktop('home')}>
          <div className='place-self-center flex gap-2'>
            <FaHome className='place-self-center' /> Home
          </div>
        </a>
        <a href={pageRoutes.about} className={getSelectedDesktop('about')}>
          <div className='place-self-center flex gap-2'>
            <FaBook className='place-self-center' /> About
          </div>
        </a>
        <a href={pageRoutes.writing} className={getSelectedDesktop('writing')}>
          <div className='place-self-center flex gap-2'>
            Writing <FaPen className='place-self-center' />
          </div>
        </a>
        <a href='#' className={getSelectedDesktop('contact')}>
          <div className='place-self-center flex gap-2'>
            Contact <FaEnvelope className='place-self-center' />
          </div>
        </a>
      </nav>
    </>
  )
}

export default Header
