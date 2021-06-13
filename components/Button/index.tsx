import { FC, MouseEventHandler } from 'react'
import Link from 'next/link'
interface ButtonProps {
  color?: 'blue' | 'gray'
  type?: 'button' | 'submit' | 'reset'
  block?: boolean
  text?: boolean
  href?: string
  loading?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}
const Button: FC<ButtonProps> = ({ block, color = 'blue', text = false, loading = false, ...props }) => {
  if (props.href) delete props.type

  let btnClass
  if (color === 'blue') btnClass = 'btn-large bg-blue focus:ring-white'
  else if (color === 'gray') btnClass = 'btn-large bg-gray-dark focus:ring-white'
  // default class
  const classes =
    ' w-full px-6 py-2 rounded-lg hover:ring-1 hover:ring-opacity-40 ring-offset-2 focus:ring-1 focus:ring-opacity-40'

  // if type is block
  const blockClass = block ? 'w-full' : ''

  // assign classes based on button variant
  const textClass = text ? 'text-white' : 'text-light'

  const disabledClass = loading ? 'cursor-not-allowed opacity-50' : ''

  return (
    <div className='relative'>
      {props.href ? (
        <Link href={props.href}>
          <button
            {...props}
            disabled={loading}
            className={[classes, btnClass, textClass, blockClass, disabledClass].join(' ')}
          >
            {props.children}
          </button>
        </Link>
      ) : (
        <button
          {...props}
          disabled={loading}
          className={[classes, btnClass, textClass, blockClass, disabledClass].join(' ')}
        >
          {props.children}
        </button>
      )}
    </div>
  )
}

export default Button
