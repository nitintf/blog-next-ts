import React from 'react'

interface Props {
  slug: string
}

const Comments: React.FC<Props> = ({slug}): JSX.Element => {
  return (
    <div>
      Comments
    </div>
  )
}

export default Comments
