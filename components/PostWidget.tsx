import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'

import type { PostT, CategoriesT } from '../lib/types'
import { getRecentPosts, getSimilarPosts } from '../services'
import Image from 'next/image'

type Props = {
  categories?: string[];
  slug?: string
}

const PostWidget: React.FC<Props> = ({ categories, slug }): JSX.Element => {
  const [relatedPosts, setRelatedPost] = useState<PostT[]>()
  const [loading, setLoading] = useState<Boolean>(true)
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories!, slug).then((result: any) => {
        setRelatedPost(result)
      })
    } else {
      getRecentPosts().then((result: any) => {
        setRelatedPost(result)
      })
    }
    setLoading(false)
  }, [categories, slug])


  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold'>
        {slug ? 'Related posts' : 'Recent posts'}
      </h3>
      {relatedPosts?.map(post => (
        <div key={post.slug} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              height={60}
              width={60}
              className='align-middle rounded-full'
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 font-xs'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
