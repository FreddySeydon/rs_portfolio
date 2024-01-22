import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import dynamic from "next/dynamic";

const DrawerMenu = dynamic(() => import("./components/DrawerMenu"), {
  ssr: false,
});

export default function Home() {
  const navbarHeight = "65px";

  return (
    <div className="drawer">
      <div className="drawer-content">
        <main className="scroll-smooth">
          <div className="sticky top-0 right-0 left-0 z-40">
            <NavBar />
          </div>
          <div id="home" style={{ scrollMarginTop: "120px" }}>
            <Hero />
          </div>
          <div id="about" style={{ scrollMarginTop: navbarHeight }}>
            <About />
          </div>
          <div id="portfolio" style={{ scrollMarginTop: navbarHeight }}>
            <Portfolio />
          </div>
        </main>
      </div>
      <DrawerMenu />
    </div>
  );
}
