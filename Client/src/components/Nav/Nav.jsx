import SearchBar from '../Searchbar/SearchBar.jsx';
import { Link } from 'react-router-dom';


const Nav = ({onSearch}) => {

  return (
    <nav>
      <SearchBar onSearch={onSearch}/>
      <button>
        <Link to='/about' element>ABOUT</Link>
      </button>
      
      <button>
        <Link to='/home'>HOME</Link>
      </button>

      <button>
        <Link to='/favorites' element>FAVORITES</Link>
      </button>
    </nav>
  )
}

export default Nav;