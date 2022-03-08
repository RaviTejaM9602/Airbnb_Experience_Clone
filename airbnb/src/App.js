import './App.css';
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import Data from "./Data.js"

function App() {
      const cardData = Data.map((info) => {
               return (
                 <Card
                 key={info.id}
                 item={info}
               /> )
          })
  return (
    <div>
           <Navbar />
           <Hero />
           <section className="cards-list">
                {cardData}
            </section>
    </div>
  );
}

export default App;
