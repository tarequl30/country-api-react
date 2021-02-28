import React from 'react';
import '././Country/Country.css'

const Country = (props) => {
    
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="countryStyle">
            <h4>Name : {props.name}</h4>
            <img src={props.flag} alt="" width='140px'/>
            <h5>Population: {props.population}</h5>
            <button onClick={() => handleAddCountry(props.country)}>add country</button>
        </div>
    );
};

export default Country;