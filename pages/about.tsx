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
      <div className='shadow-md grid bg-gray'>
        <div className='md:w-1/4 p-2 place-self-center grid'>
          <img src='/img/sitting.webp' alt='Falak' className='object-contain place-self-center' />
        </div>
      </div>
      <div className='mb-auto p-7 md:mx-auto py-6 sm:px-6 lg:px-8 grid'>
        <AboutMe />
      </div>
    </General>
  )
}
