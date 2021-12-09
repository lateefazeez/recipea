import Trashcan from "../assets/trashcan.svg"

// styles
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "./RecipeList.css"
import { recipeaFirestore } from "../firebase/config";

const RecipeList = (props) => {
  const { recipes } = props
  const { mode } = useTheme()

  if (recipes.length === 0) {
    return <div className="error">There are no recipes found </div>
  }

  const handleDelete = (id) => {
    recipeaFirestore.collection('recipes').doc(id).delete()
  }

  return ( 
    <div className="recipe-list">
      { recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img 
            className="delete"
            src={ Trashcan } 
            alt="trash"
            onClick={() => handleDelete(recipe.id)} />
        </div>
      ))}
    </div>
   );
}
 
export default RecipeList;