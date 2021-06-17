import General from '../../layouts/General'
import { PostData, postMap } from '../../siteData/posts/postMap'

const PostCard = ({ post }: { post: PostData }) => (
  <a href={`/writing/${post.linkName}`}>
    <div className='bg-primary md:w-auto p-2 m-2 text-white rounded-lg text-center hover:bg-secondary'>
      <div className='p-5'>
        <h3>{post.name}</h3>
        <div> {post.description}</div>
      </div>
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
      background='bg-black'
    >
      <div className='space-y-2'>
        {postMap.map(x => {
          return <PostCard key={x.name} post={x} />
        })}
      </div>
    </General>
  )
}
