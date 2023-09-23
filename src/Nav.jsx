import { Link } from 'react-router-dom';
const Nav = ({Search,setSearch})=>{

  return(
    <nav className="Nav">
      <form action="" className="searchForm" onSubmit={(e)=>e.preventDefault()}>

        <label htmlFor="search">search Post</label>
        <input type="text" id="search" placeholder="search post" value={Search}
        onChange={(e)=>setSearch(e.target.value)}
        />

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/post">Post</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

      </form>
    </nav>
  )
}
export default Nav;