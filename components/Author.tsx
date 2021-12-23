import React from 'react'
import type { AuthorT } from '../lib/types/post'

interface Props {
  author: AuthorT
}

const Author: React.FC<Props> = ({author}): JSX.Element => {
  return (
    <div>
      Author
    </div>
  )
}

export default Author
