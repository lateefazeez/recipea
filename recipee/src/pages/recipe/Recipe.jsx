// hooks
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


// styles
import './Recipe.css'
import { useTheme } from '../../hooks/useTheme';
import { recipeaFirestore } from '../../firebase/config';

const Recipe = () => {
  const { mode } = useTheme()
  const { id } = useParams()

  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    recipeaFirestore.collection('recipes').doc(id).get()
      .then(doc => {
        if (doc.exists) {
          setIsPending(false)
          setRecipe(doc.data())
        } else {
          setIsPending(false)
          setError("Could not find the recipe")
        }
        
      })
  }, [id])



  return ( 
    <div className={`recipe ${mode}`}>
       { isPending && <p className="loading">Loading...</p> }
       { error && <div className="error">{error}</div> }
       { recipe && 
       <>
         <h2 className="page-title">{recipe.title}</h2>
         <p>Takes {recipe.cookingTime} to cook.</p>
         <ul>
           { recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
         </ul>
         <p className="method">{recipe.method}</p>
       </> }
    </div>
   );
}
 
export default Recipe;