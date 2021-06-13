import AboutMe from '../components/AboutMe'
import General from '../layouts/General'
export default function About() {
  return (
    <General
      title='Follow Me'
      selectedNavKey='follow'
      iconHref='/ico/wave.ico'
      description='Follow'
      canonical='/follow'
    >
      <div className='space-y-10'>
        <div className='flex flex-col items-center'>
          <a href='#'>Instagram</a>
          <a href='#'>Instagram</a>
          <a href='#'>Instagram</a>
        </div>
      </div>
    </General>
  )
}
