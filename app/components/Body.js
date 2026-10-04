import About from "./About";
import Contributions from "./Contributions";
import Education from "./Education";
import Experience from "./Experience";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Stats from "./Stats";
import TechStack from "./TechStack";

export default function Body() {
  return (
    <main className="mx-auto flex min-h-screen w-full flex-col">
      <Hero />
      <Stats />
      <TechStack />
      <About />
      <Contributions />
      <Experience />
      <Projects />
      <Skills />
      <Education />
    </main>
  );
}
