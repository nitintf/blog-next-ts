import { serialize } from 'next-mdx-remote/serialize'
import he from 'he'

import { Post } from 'graphql/schema'

export const parsePostData = async (post: Post) => {
  return {
    ...post,
    ...(post.content && {
      content: {
        markdown: post.content,
        mdx: await serialize(he.decode(post.content))
      }
    }),
    ...(post.published && {
      published: new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(new Date(post.published))
    })
  }
}
