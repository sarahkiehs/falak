import General from '../../layouts/General'
import { PostData, postMap } from '../../siteData/posts/postMap'

const PostCard = ({ post }: { post: PostData }) => (
  <a href={`/writing/${post.linkName}`}>
    <div className='bg-blue p-10 text-red'>
      {post.name}
      <div> {post.description}</div>
    </div>
  </a>
)
export default function Post() {
  return (
    <General
      title='Writings'
      selectedNavKey='writing'
      iconHref='/ico/wave.ico'
      description="Stuff I've written"
      canonical='/writing'
    >
      <div className='space-y-10'>
        {postMap.map(x => {
          return <PostCard key={x.name} post={x} />
        })}
      </div>
    </General>
  )
}
