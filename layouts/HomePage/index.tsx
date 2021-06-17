import { ReactNode } from 'react'
import Header from '../../components/utils/Header'
import SEOMeta from '../../components/utils/SEO'
import { navKeys } from '../../lib/types'

import { FaFacebook, FaPen, FaBook, FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa'

import { IoLogoTiktok } from 'react-icons/io5'
import {
  SocialMediaFacebook,
  SocialMediaInstagram,
  SocialMediaTikTok,
  SocialMediaYouTube
} from '../../components/SocialMedia'

interface Props {
  children: ReactNode
  title: string
  description: string
  selectedNavKey: navKeys
  iconHref?: string
  canonical: string
}

const General = ({ children, title, description, selectedNavKey, iconHref, canonical }: Props) => (
  <>
    <SEOMeta title={title} canonical={canonical} description={description} iconHref={iconHref} />
    <div className='bg-homeBack bg-contain bg-no-repeat bg-center bg-black text-white flex flex-col min-h-screen'>
      <Header selectedKey={selectedNavKey} />
      <main className='flex-grow'>{children}</main>
    </div>

    <div className='absolute inset-y-0 left-0 grid h-screen place-content-evenly'>
      <div className=' flex flex-col y-space-2 text-6xl'>
        <SocialMediaFacebook animated={true} />
        <SocialMediaTikTok animated={true} />
        <SocialMediaInstagram animated={true} />
        <SocialMediaYouTube animated={true} />
      </div>
    </div>
  </>
)

export default General
