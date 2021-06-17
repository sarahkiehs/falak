export interface PostData {
  name: string
  description: string
  linkName: string
  lastMod: string
}

export const postMap: PostData[] = [
  {
    name: 'Hello',
    description: 'testing',
    linkName: 'blog', // has to be name of file
    lastMod: '2021-06-13'
  },
  {
    name: 'World',
    description: 'testing2',
    linkName: 'blog2',
    lastMod: '2021-06-13'
  }
]
