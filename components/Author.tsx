import Image from 'next/image'
import React from 'react'
import type { AuthorT } from '../lib/types/post'

interface Props {
  author: AuthorT
}

const Author: React.FC<Props> = ({author}): JSX.Element => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-14'>
        <Image
          alt={author.name}
          src={author.photo.url}
          height={100}
          width={100}
          className='align-middle rounded-full'
          />
      </div>
      <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-white text-lg'>
          {author.description}
      </p>
    </div>
  )
}

export default Author
