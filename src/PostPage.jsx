import { useParams } from "react-router-dom"



const PostPage = ({post, handleDelete})=>{

  const {id} = useParams();

  const posts = post.find(post => (post.id).toString() === id);

  return(
    <main className="PostPage">
      <article className="post">
        {posts &&
        <>
        <h2>{posts.title}</h2>
        <p className="postDate">{posts.date}</p>
        <p className="postbody">{posts.body}</p>
        <button onClick={()=>handleDelete(posts.id)}>Delete post</button>
        </>
        }
        {
          !posts && 
          <>
          <h2>post illa</h2>
          </>
        }
      </article>
    </main>
  )
}
export default PostPage