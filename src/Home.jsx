import React from 'react'
import Feed from './Feed'

const Home = ({post}) => {
  return (
    <main className="Home">
      {post.length ? (<Feed post={post}/>) : <p
      style={{marginTop:"2rem"}}
      >no post to display</p>}
    </main>
  )
}

export default Home