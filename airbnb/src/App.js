import './App.css';
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import Data from "./Data.js"

function App() {
      const cardData = Data.map((info) => {
               return (
                 <Card
                img={info.coverImg}
                rating={info.stats.rating}
                reviewCount={info.stats.reviewCount}
                location={info.location}
                title={info.title}
                price={info.price}
               /> )
          })
  return (
    <div>
           <Navbar />
           <Hero />
           {cardData}
    </div>
  );
}

export default App;
