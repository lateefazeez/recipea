import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';

function App() {

  const { mode } = useTheme()
  
  
  return (
    <div className={`App ${mode}`}>

      <Navbar />
      <ThemeSelector />
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route path="/create" element={ <Create />} />
        <Route path="/recipes/:id" element={ <Recipe />} />
        <Route path="/search" element={ <Search />} />
      </Routes>
    </div>
  );
}

export default App;
