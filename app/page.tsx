import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero /> 
      <About />
      <Portfolio/>
    </main>
  )
}
