import './App.css'
import { Footer } from './components/footer/Footer'
import {Header} from './components/header/Header'
import { Main } from './components/main/Main'

function App() {
  return (
    <div id='Layout'>
      <Header />
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
