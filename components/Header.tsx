import React, {useContext} from 'react'
import Link from 'next/link'
import type { Categories } from '../lib/types'

const categories: Categories[] = [
  {
    name: "React",
    slug: "react"
  },
  {
    name: "Web Development",
    slug: "web-dev"
  }
]

const Header = (): JSX.Element => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
          <Link href="/" passHref>
            <span className='cursor-pointer font-bold text-4xl text-white'>
              GraphCMS
            </span>
          </Link>
          <div className='hidden md:float-left md:contents'>
            {categories.map(cat => (
              <Link key={cat.slug} href={`/category/${cat.slug}`} passHref>
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'> 
                  {cat.name}
                </span>
              </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
