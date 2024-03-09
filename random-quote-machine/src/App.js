import React, {useState, useEffect} from 'react';
import './App.css';

let quotesDbURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [quotes, setQuotes] = useState("Quotes");
  const [author, setAuthor] = useState(null);
  const [quotesArray, setQuotesArray] = useState(null)

  const generateRandomNumber = () =>{
    let randomInteger = (Math.floor(Math.random()*quotesArray.length))
    setRandomNumber(randomInteger)
    setQuotes(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
  }

  const fetchQuote = async(url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()

    setQuotesArray(parsedJSON.quotes)
    console.log(parsedJSON)
    console.log(typeof(parsedJSON))
      
  }

  useEffect(() =>{
    fetchQuote(quotesDbURL)
    
  }, [quotesDbURL])
  

  return (
    <div className='background'>
      <p>{quotes}</p>
      <p>{author}</p>
      <p>{randomNumber}</p>
      <button onClick={generateRandomNumber}>Click</button>
    
    </div>
  );
}

export default App;
