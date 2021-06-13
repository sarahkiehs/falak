import { pageRoutes } from '../../../lib/routes'
import Button from '../../Button'

const Intro = () => (
  <div className='md:flex md:flex-col space-y-4 md:items-center'>
    <h1>This is Falak Page</h1>
    <h2>test.</h2>
    <div className='md:space-x-4 md:flex md:space-y-0 space-y-4'>
      <Button color='blue' text={true} href={pageRoutes.about}>
        {' '}
        About Me
      </Button>
      <Button color='gray' text={true}>
        {' '}
        Follow Me
      </Button>
    </div>
  </div>
)

export default Intro
