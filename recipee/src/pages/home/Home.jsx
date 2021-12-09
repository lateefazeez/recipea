import { useState, useEffect } from 'react';
import RecipeList from '../../components/RecipeList';
import { recipeaFirestore } from '../../firebase/config';
import { useFetch } from '../../hooks/useFetch'
import './Home.css'

const Home = () => {
  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState("")
  // const { data, isPending, error } = useFetch("http://localhost:3000/recipes")

  useEffect(() => {
    setIsPending(true)
    recipeaFirestore.collection('recipes').get()
      .then(snapshot => {
        if (snapshot.empty) {
          setError("No recipes to load")
          setIsPending(false)
        }
        let result = []
        snapshot.docs.forEach(doc => {
          result.push({ id: doc.id, ...doc.data() })
        })
        setData(result)
        setIsPending(false)
      })
      .catch(err => {
        setError(err)
        setIsPending(false)
      })
  }, [])


  return ( 
    <div className="home">
      { error && <p className="error">{error}</p> }
      { isPending && <p className="loading">Loading...</p>}
      { data && <RecipeList recipes={data} />}
    </div>
   );
}
 
export default Home;