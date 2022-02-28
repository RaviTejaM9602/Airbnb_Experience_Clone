import './App.css';
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"

function App() {
  return (
    <div>
           <Navbar />
           <Hero />
           <Card 
           img="katie-zaferes.png"
           rating="5.0"
           reviewCount={6}
           country="USA"
           title="Life Lessons with Katie Zaferes"
           price={136}/>
    </div>
  );
}

export default App;
