
import General from '../layouts/General'
import Intro from '../components/Home/Intro'

export default function Home() {
  return (
    <General
      iconHref='/ico/wave.ico'
      title="Falak Page"
      selectedNavKey='home'
      description="Hi there! This is Falak's page"
      canonical='/'
    >
      <div className='space-y-10 md:flex md:flex-col'>
        <Intro />
      </div>
    </General>
  )
}
