export interface PostData {
  name: string
  description: string
  linkName: string
  lastMod: string
}

export const postMap: PostData[] = [
  {
    name: 'First Blog',
    description: 'hohoho',
    linkName: 'blog', // has to be name of file
    lastMod: '2021-06-13'
  },
  {
    name: 'My Daddy Is cool ',
    description: 'hohoho',
    linkName: 'myDaddy',
    lastMod: '2021-06-13'
  }
]
