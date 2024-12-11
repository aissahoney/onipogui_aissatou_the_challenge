import React, { useState } from 'react';
import './Countries.css';
import { useNavigate } from 'react-router-dom';

const Countries = ({ data }) => {
    const navigate = useNavigate();
    const [selectCountry, setSelectCountry] = useState('');
    const [selectRegion, setSelectRegion] = useState('');

    const searchFilter = data.filter((item) =>
        (item.name.toLowerCase().startsWith(selectCountry.toLowerCase()) ||
            selectCountry.trim() === '') &&
        (item.region.toLowerCase() === selectRegion.toLowerCase() ||
            selectRegion === '')
    );

    return (
        <div className="all-container">
            <div className="search-div">
                <input 
                    type="text" 
                    placeholder="Search for country" 
                    onChange={(e) => setSelectCountry(e.target.value)} 
                />
                <select onChange={(e) => setSelectRegion(e.target.value)} className="select-container">
                    <option value="">Filter by region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

            <div className="countries-container">
                {searchFilter.map((item, index) => (
                    <div key={index} onClick={() => navigate(`/${item.alpha3Code}`)} className="single">
                        <div>
                            <img src={item.flags.png} alt={`${item.name} flag`} />
                        </div>
                        <div className="text-countries">
                            <h3>{item.name}</h3>
                            <p className="bold">Population: <span className="light">{item.population}</span></p>
                            <p className="bold">Region: <span className="light">{item.region}</span></p>
                            <p className="bold">Capital: <span className="light">{item.capital}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Countries;
























