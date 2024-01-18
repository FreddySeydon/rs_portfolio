import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"

export default function Home() {
  const navbarHeight = '60'

  return (
    <main>
      <div className="sticky top-0 right-0 left-0 z-50">
      <NavBar />
      </div>
      <div className="relative" id="home" style={{height: navbarHeight + 'px'}}>
        <a className="absolute" style={{ top: `-${navbarHeight}px`}} />
      </div>
      <div>
      <Hero /> 
      </div>
      <div id="about-anchor" className="absolute" style={{ top: `-${navbarHeight}px` }}></div>
      <div id="about">
      <About />
      </div>
      <div id="portfolio-anchor" className="absolute" style={{ top: `-${navbarHeight}px` }}></div>
      <div id="portfolio">
      <Portfolio/>
      </div>
    </main>
  )
}
