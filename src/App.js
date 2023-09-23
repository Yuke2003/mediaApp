import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import { Routes,Route,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {format} from "date-fns"
import './index.css';
import api from "./api/Posts"

function App() {

  const [Search,setSearch] = useState('')
  const [searchresult,setsearchresult] = useState('')
  // const [addPost,setaddPost] = useState('')
  const [postTitle,setpostTitle] = useState ('')
  const [postBody,setpostBody] =useState('')
  const [post,setpost] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/Posts'); 
        setpost(response.data);
      } catch (err){
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.message) {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchPosts();
  }, []); 

  const handlesubmit = async(e)=>{
    e.preventDefault();
    const id = post.length ? post[post.length - 1].id+1 : 1
    const datetime = format(new Date(),'MMMM dd, yyyy , pp')
    const List = {id,title:postTitle,datetime,body:postBody}
    try{
      const response = await api.post('/Posts', List);
      const ListItem = [...post,response.data]
      setpost(ListItem); 
      setpostTitle('')
      setpostBody('')
      navigate('/')

    }catch (err) {
        console.log(`Error: ${err.message}`);
    }
  }

  useEffect(() => {
    const SearchItem = post.filter((posts) => {
      const lowerCaseTitle = (posts.title || '').toLowerCase();
      const lowerCaseBody = (posts.body || '').toLowerCase();
      const lowerCaseSearch = Search.toLowerCase();
    
      return lowerCaseTitle.includes(lowerCaseSearch) || lowerCaseBody.includes(lowerCaseSearch);
    });
    
    setsearchresult(SearchItem.reverse());
    
  }, [post,Search]);
  
  

  const handleDelete = async (id)=> {
    try{
      await api.delete(`Posts/${id}`)
      const postList = post.filter(posts => posts.id!==id);
      setpost(postList)
      navigate('/')
    }catch (err) {
      console.log(`Error: ${err.message}`);
  }
  }


  return (
    <div className="App">
      <Header title="social media app" />
      <Nav 
      Search={Search}
      setSearch={setSearch}
      />
      <Routes>
      <Route path='/' element={<Home post={searchresult}
      setpost={setpost}
      />} />
      <Route path='/post'>
      <Route index element={ <NewPost 
      postTitle = {postTitle}
      setpostTitle={setpostTitle}
      postBody = {postBody}
      setpostBody = {setpostBody}
      handlesubmit={handlesubmit}
      />} /> 
      <Route path=':id' element={<PostPage
      post={post}
      handleDelete = {handleDelete} 
      />}/>
      </Route>
      
      
      {/* <PostPage /> */}
      <Route path='/about' element={<About />} />
      
      <Route path='*' element={<Missing />}/>
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
