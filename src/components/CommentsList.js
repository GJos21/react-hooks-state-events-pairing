import React from 'react'
import Comment from './Comment'

function CommentsList( {items} ) {
  return (
    <div>
      <h2>{items.length} Comments</h2>
      {items.map((item) => <Comment key={item.id} user={item.user} text={item.comment} />)}
    </div>
  )
}

export default CommentsList