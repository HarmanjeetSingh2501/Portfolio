import Body from "./components/Body";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import PageEffects from "./components/PageEffects";
import PortfolioInteractions from "./components/PortfolioInteractions";

export default function Home() {
  return (
    <>
      <PageEffects />
      <Navbar />
      <Body />
      <Contact />
      <PortfolioInteractions />
    </>
  );
}
