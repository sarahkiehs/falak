import { ReactNode } from 'react'
import Header from '../../components/utils/Header'
import SEOMeta from '../../components/utils/SEO'
import { navKeys } from '../../lib/types'

interface Props {
  children: ReactNode
  title: string
  description: string
  selectedNavKey: navKeys
  iconHref?: string
  canonical: string
  background?: 'bg-black'
}

const General = ({ children, title, description, selectedNavKey, iconHref, canonical, background }: Props) => (
  <>
    <SEOMeta title={title} canonical={canonical} description={description} iconHref={iconHref} />
    <div className={`flex flex-col min-h-screen overflow-y ${background}`}>
      <Header selectedKey={selectedNavKey} />
      <main>{children}</main>
    </div>
  </>
)

export default General
