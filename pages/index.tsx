import HomePage from '../layouts/HomePage'
import Intro from '../components/Home/Intro'

export default function Home() {
  return (
    <HomePage
      iconHref='/ico/wave.ico'
      title='Falak Page'
      selectedNavKey='home'
      description="Hi there! This is Falak's page"
      canonical='/'
    >
      <Intro />
    </HomePage>
  )
}
