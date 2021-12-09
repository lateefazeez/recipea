import { useState, useRef } from 'react';
import { useNavigate} from "react-router-dom"
import { recipeaFirestore } from "../../firebase/config"

// styles
import './Create.css'

const Create = () => {
  const [title, setTitle] = useState("")
  const [method, setMethod] = useState("")
  const [cookingTime, setCookingTime] = useState("")
  const [ingredient, setIngredient] = useState("")
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const navigate = useNavigate()

  const addRecipe = (e) => {
    e.preventDefault()
    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients(prevIngredients => [...prevIngredients, ingredient.trim()])
    }
    
    setIngredient("")
    ingredientInput.current.focus()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const doc = { title, method, cookingTime: cookingTime + " minutes", ingredients }
    recipeaFirestore.collection('recipes').add(doc)
    .then(response => {
      navigate("/")
    })
    .catch(err => {
      console.log(`An error occured: ${err}`)
    })
  }

 

  return ( 
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)} 
            value={title}
            required
          />
        </label>
        
        <label>
          <span>Recipe Ingredients</span>
          <div className="ingredients">
            <input 
              type="text"
              className="recipe-input"
              onChange={(e) => setIngredient(e.target.value)} 
              value={ingredient}
              ref={ingredientInput}
            />
            <button className="btn" onClick={addRecipe}>Add</button>
          </div>
          
        </label>

        {<p>{ingredients.join(", ")}</p>}

        <label>
          <span>Recipe Method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)} 
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking Time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)} 
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
   );
}
 
export default Create;