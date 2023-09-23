import './index.css';
const Post = ({postTitle,setpostTitle,postBody,setpostBody,handlesubmit})=>{

  return(
    <main className="NewPost">
      <h2>New Post</h2>
      <form action="" className="NewPostForm" onSubmit={handlesubmit}>
        <label htmlFor="posttitle">Title:</label>
        <input type="text" 
        value={postTitle}
        onChange={(e)=>setpostTitle(e.target.value)}
        />

        <label htmlFor="postbody">Post:</label>
        <textarea id="postbody"
        value={postBody}
        onChange={(e)=>setpostBody(e.target.value)}
        required
        ></textarea>

        <button>Submit</button>
      </form>
    </main>
  )
}
export default Post