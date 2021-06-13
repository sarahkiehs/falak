export type navKeys = 'home' | 'about' | 'stack' | 'writing' | 'AMA' | 'bookmarks' | 'follow'

export interface TimelineDataObject {
  slug?: string
  createdAt: string // TODO
  icon: string
  title: string
  excerpt: string
  type: 'GENERIC' | string
}

export interface PostObject {
  slug: string
  title: string
  createdAt: Date
  lastUpdate?: Date
  html: string
  images?: string[]
}
