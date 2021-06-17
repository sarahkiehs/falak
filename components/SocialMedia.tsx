import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { IoLogoTiktok } from 'react-icons/io5'

const animation = 'transition duration-200 ease-in-out transform hover:scale-125 hover:translate-x-3 hover:z-50 z-0'

interface SocialMediaProps {
  animated?: boolean
  text?: boolean
}
export const SocialMediaFacebook = (p: SocialMediaProps) => (
  <a
    href='#'
    className={`text-white py-2 ${p.animated && animation} ${(p.text && 'w-full') || 'px-4'}`}
    style={{ background: '#4267B2' }}
  >
    <div className='flex gap-2 justify-center'>
      <FaFacebook className={p.text && 'place-self-center'} /> {p.text && 'Facebook'}
    </div>
  </a>
)

export const SocialMediaTikTok = (p: SocialMediaProps) => (
  <a
    href='https://www.tiktok.com/@falak.zaman?source=h5_m&_r=1'
    className={`text-white bg-black py-2 ${p.animated && animation} ${(p.text && 'w-full') || 'px-4'}`}
  >
    <div className='flex gap-2 justify-center'>
      <IoLogoTiktok className={p.text && 'place-self-center'} /> {p.text && 'TikTok'}
    </div>
  </a>
)

export const SocialMediaInstagram = (p: SocialMediaProps) => (
  <a
    href='https://www.instagram.com/tanziazaman_offical/'
    className={`text-white py-2 ${p.animated && animation} ${(p.text && 'w-full') || 'px-4'}`}
    style={{
      background: '#d6249f'
    }}
  >
    <div className='flex gap-2 justify-center'>
      <FaInstagram className={p.text && 'place-self-center'} /> {p.text && 'Instagram'}
    </div>
  </a>
)

export const SocialMediaYouTube = (p: SocialMediaProps) => (
  <a
    href='#'
    className={`text-white py-2 ${p.animated && animation} ${(p.text && 'w-full') || 'px-4'}`}
    style={{
      background: '#bb0000'
    }}
  >
    <div className='flex gap-2 justify-center'>
      <FaYoutube className={p.text && 'place-self-center'} /> {p.text && 'YouTube'}
    </div>
  </a>
)
