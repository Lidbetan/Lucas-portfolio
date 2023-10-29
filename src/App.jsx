
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio/Portfolio"



function App() {

  return (
    <>
      <div className=" flex flex-col items-center justify-center w-11/12 m-auto ">
        <Intro/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
