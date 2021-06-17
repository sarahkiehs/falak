import {
  SocialMediaFacebook,
  SocialMediaInstagram,
  SocialMediaTikTok,
  SocialMediaYouTube
} from '../components/SocialMedia'
import General from '../layouts/General'
import { contactDetails, ContactDetailsProps } from '../lib/constants/contacts'

const Details = (p: ContactDetailsProps) => (
  <p>
    {p.name}: {p.field}
  </p>
)
export default function About() {
  return (
    <General
      title='Follow Me'
      selectedNavKey='follow'
      iconHref='/ico/wave.ico'
      description='Follow'
      canonical='/follow'
    >
      <div className='y-space-2'>
        <h1 className='text-center m-5'>Contact</h1>

        <h2 className='text-center m-5'>Details</h2>
        <div className='text-center'>
          {contactDetails.map(d => (
            <Details {...d} />
          ))}
        </div>

        <h2 className='text-center m-5'>Follow Me!</h2>
        <div className='grid grid-cols-4 gap-2'>
          <SocialMediaFacebook text={true} />
          <SocialMediaTikTok text={true} />
          <SocialMediaInstagram text={true} />
          <SocialMediaYouTube text={true} />
        </div>
      </div>
    </General>
  )
}
