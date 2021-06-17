import { headerText } from '../../../lib/constants/headers'
import { pageRoutes } from '../../../lib/routes'
import Button from '../../Button'

const Intro = () => (
  <div className='md:flex md:flex-col space-y-4 md:items-center'>
    <h1 className='font-pop font-bold text-5xl'>Falak Zaman</h1>
    <p>The journey of a courageous girl with cerebral palsy</p>

    <Button color='primary' href={pageRoutes.about}>
      {headerText.about}
    </Button>
  </div>
)

export default Intro
