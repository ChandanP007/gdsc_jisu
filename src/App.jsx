
import './App.css'
// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Header from './components/Header'
import Team from './components/Team'
// import Loading from './components/Loading'
import SpeedDail from './components/speedDail'
import Events from './components/Events'
import Newsletter from './components/Newsletter'
import Community from './components/Community'

function App() {
  // set dark mode as default


  return (
    <>
      {/* <Hero /> */}
      <Header />
      <Events />
      <Team />
      <Newsletter />
      <Community />
      <Footer />
      <SpeedDail />

    </>
  )
}

export default App
