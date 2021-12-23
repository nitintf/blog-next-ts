import React, {useEffect, useState} from 'react'
import Link from 'next/link'

import { getCategories } from '../services'
import type { Categories } from '../lib/types'

const Categories = ():JSX.Element => {
  const [categories, setCategories] = useState<Categories[]>()

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>
      {categories?.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`} passHref>
          <span className='cursor-pointer block pb-3 mb-3'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
