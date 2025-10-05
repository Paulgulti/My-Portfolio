import { useState } from "react"
import About from "./Components/About/About"
import Header from "./Components/Header/Header"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"
import Certificates from "./Components/Certificates/Certificates"


function App() {

  const [theme, setTheme] = useState('Light')

  function toggleTheme(){
    setTheme(theme === 'Light' ? 'Dark' : 'Light')
  }


  return (
    <div className={`app-container ${theme === 'Light' ? 'Light' : 'Dark'}`}>
      <Header toggleTheme={toggleTheme} theme={theme}/>
      <About/>
      <Projects/>
      <Certificates/>
      <Contact/>
    </div>
  )
}

export default App
