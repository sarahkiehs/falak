import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import General from '../../layouts/General'
import gfm from 'remark-gfm'

export default function Post({ id, data, content }) {
  if (!content) {
    return (
      <General
        title='404'
        selectedNavKey='writing'
        iconHref='/ico/wave.ico'
        canonical={`/writing/none`}
        description='404'
      >
        <div className='md:max-w-2xl space-y-2'>404</div>
      </General>
    )
  }
  return (
    <General
      title={data.title}
      selectedNavKey='writing'
      iconHref='/ico/wave.ico'
      canonical={`/writing/${id}`}
      description={data.desc}
    >
      <div className="grid">
      <div className='md:max-w-4xl space-y-3 markdown place-self-center'>
        <ReactMarkdown remarkPlugins={[gfm]}>
          {content}
        </ReactMarkdown>
      </div>
      </div>
    </General>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query

  let data = null
  let content = null

  try {

    const postData = await import(`../../siteData/posts/data/${id}.md`)
    if (!postData) throw Error('not found')
    const m = matter(postData.default)
    content = m.content
    data = m.data
  } catch (e) {
    console.debug(e)
  }
  return {
    props: { data, content, id } // will be passed to the page component as props
  }
}
