import { useLocation } from "react-router-dom";

// styles
import "./Search.css"

// components
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

const Search = () => {
  const queryString = useLocation().search
  const queryParams =  new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = `http://localhost:3000/recipes?q=${query}`
  const { error, isPending, data } = useFetch(url)

  return ( 
    <div>
      { error && <p className="error">{error}</p> }
      { isPending && <p className="loading">Loading...</p> }
      <h3 className="page-title">Showing Recipes including "{query}"</h3>
      { data && <RecipeList recipes={data} /> }
    </div>
   );
}
 
export default Search;