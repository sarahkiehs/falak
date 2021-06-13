import AboutMe from '../components/AboutMe'
import General from '../layouts/General'
export default function About() {
  return (
    <General
      title='About Me'
      selectedNavKey='about'
      iconHref='/ico/wave.ico'
      description='About Falak...'
      canonical='/about'
    >
      <div className='space-y-10'>
        <div className='flex flex-col items-center'>
          <img
            src='https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png'
            alt='Falak'
          />
        </div>
        <AboutMe />
      </div>
    </General>
  )
}
