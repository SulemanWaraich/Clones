import './App.css'
import About from './components/About'
import Home from './components/Home'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
   <>
    <div className='flex flex-col items-center scroll-smooth'>
    <Home></Home>
    <About></About>
    <Skill></Skill>
    <Projects></Projects>
    <Contact></Contact>
    </div>
   </>
  )
}

export default App
