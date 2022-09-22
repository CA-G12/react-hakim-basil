import "./App.css";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import CardsContainer from "./components/CardsContainer";

function App() {
  return (
    <>
      <Header />
      <LandingSection />
      <div className="div">
        <h2 className="animeSectionTitle">Animes List</h2>
        <CardsContainer />
      </div>
    </>
  );
}

export default App;
