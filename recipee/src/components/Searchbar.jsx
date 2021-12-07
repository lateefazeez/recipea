// packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// styles
import "./Searchbar.css"

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchTerm)

    navigate(`/search?q=${searchTerm}`)
  }

  return ( 
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input 
          type="text"
          id="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm} 
        />
      </form>
      
    </div>
   );
}
 
export default Searchbar;