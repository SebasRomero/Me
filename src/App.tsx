import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import MyProjects from './pages/MyProjects'
import Resume from './pages/Resume'
import WhoAmI from './pages/WhoAmI'
import JustLearned from './pages/JustLearned'
import ShortenerUrl from './pages/projects/ShortenerUrl'

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/my-projects' element={<MyProjects />} />
          <Route path='/my-projects/shortener-url' element={<ShortenerUrl/>}></Route>

          <Route path='/just-learned' element={<JustLearned />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/' element={<WhoAmI />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
