
import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country';



function App() {
  const [countries, setCountries] = useState([]);

useEffect(() => {
  fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(data => 
    {setCountries(data)
    const names = data.map(country => country.name)

    });
}, []);

const handleAddCountry = (country) => {
console.log('clicked' , country)} 
  return (
    <div className="App">
      <header className="App-header">
        <h1>country : {countries.length}</h1>
        <h4>Country added :</h4>
       <ul>
          {
            countries.map(country => <Country key={country.alpha3Code} handleAddCountry={handleAddCountry} flag={country.flag} population={country.population} name={country.name}></Country>)
          }
      </ul> 
      <Country />
      </header>
    </div>
  );
}

export default App;
