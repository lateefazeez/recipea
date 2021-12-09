import { useState, useEffect } from 'react';
import RecipeList from '../../components/RecipeList';
import { recipeaFirestore } from '../../firebase/config';
import './Home.css'

const Home = () => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    const unsub = recipeaFirestore.collection('recipes').onSnapshot(snapshot => {
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
    }, (err) => {
      setIsPending(false)
      setError("No recipes found")
    })

    return () => unsub()
      
  }, [])


  return ( 
    <div className="home">
      { error && <p className="error">{error}</p> }
      { isPending && <p className="loading">Loading...</p>}
      { data && <RecipeList recipes={data.sort()} />}
    </div>
   );
}
 
export default Home;