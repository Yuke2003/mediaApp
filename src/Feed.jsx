
import React from 'react'
import Post from './Post'

const Feed = ({post}) => {
  return (
    <>
    {post.map((posts)=>(
        <Post key={posts.id} post={posts} />
    ))}
    </>
  )
}

export default Feed