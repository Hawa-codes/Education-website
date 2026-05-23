import './App.css'
import Header from './Components/Header'
import Card from './Components/Card'
import Footer from './Components/Footer'
import laptop1 from './assets/Laptop.png'
import laptop2 from './assets/Laptop2.png'
import laptop3 from './assets/Laptop3.png'


function App() {

  const cards = [
  {
      image: laptop1,
      text: "General English",
    },
    {
      image: laptop2,
      text: "Classic English",
    },
   {
      image: laptop3,
      text: "Business English",
    }
  ]

  // const cards = Object.values(card);

  return (
    <>
      <div className="app">
        <Header />

        <div className="card-container">
          {cards.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
