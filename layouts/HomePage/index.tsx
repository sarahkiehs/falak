import { ReactNode } from 'react'
import Header from '../../components/utils/Header'
import SEOMeta from '../../components/utils/SEO'
import { navKeys } from '../../lib/types'

import { FaFacebook, FaPen, FaBook, FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa'

import { IoLogoTiktok } from 'react-icons/io5'

interface Props {
  children: ReactNode
  title: string
  description: string
  selectedNavKey: navKeys
  iconHref?: string
  canonical: string
}

const animation = 'transition duration-200 ease-in-out transform hover:scale-125 hover:translate-x-3 hover:z-50 z-0'

const General = ({ children, title, description, selectedNavKey, iconHref, canonical }: Props) => (
  <>
    <SEOMeta title={title} canonical={canonical} description={description} iconHref={iconHref} />
    <div className='bg-homeBack bg-contain bg-no-repeat bg-center bg-black text-white flex flex-col min-h-screen'>
      <Header selectedKey={selectedNavKey} />
      <main className='flex-grow'>{children}</main>
    </div>

    <div className='absolute inset-y-0 left-0 grid h-screen place-content-evenly'>
      <div className=' flex flex-col y-space-2 text-6xl'>
        <a href='#' className={`text-white py-2 px-4 ${animation}`} style={{ background: '#4267B2' }}>
          <FaFacebook />
        </a>
        <a
          href='https://www.tiktok.com/@falak.zaman?source=h5_m&_r=1'
          className={`text-white bg-black py-2 px-4 ${animation}`}
        >
          <IoLogoTiktok />
        </a>
        <a
          href='https://www.instagram.com/tanziazaman_offical/'
          className={`text-white py-2 px-4 ${animation}`}
          style={{
            background: '#d6249f'
          }}
        >
          <FaInstagram />
          <i className='fa fa-instagram'></i>
        </a>
        <a
          href='#'
          className={`text-white py-2 px-4 ${animation}`}
          style={{
            background: '#bb0000'
          }}
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  </>
)

export default General
