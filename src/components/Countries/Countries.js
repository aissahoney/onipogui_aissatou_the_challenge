import React, { useState } from 'react';
import './Countries.css'
import { useNavigate} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch} from '@fortawesome/free-solid-svg-icons';




const Countries = ({ data }) => {
    const navigate = useNavigate();
    const [selectCountry, setSelectCountry] = useState('')
    const [selectRegion, setSelectRegion] = useState('')

    const searchFilter =
        data.filter((item) =>
            (item.name.common.toLowerCase().startsWith(selectCountry.toLowerCase()) ||
            selectCountry.trim() === '') &&
            (item.region.toLowerCase() === selectRegion.toLowerCase() ||
            selectRegion === ''))
    return (
        <>
            <div className='search-div'>
               {/* <FontAwesomeIcon id='iconBack' icon={faSearch}/> */}
                <input type="text" placeholder='Search for country' onChange={(e) => setSelectCountry(e.target.value)}/>
                <select  onChange={(e) => setSelectRegion(e.target.value)}>
                    <option value=""> Filter by region </option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>

            <div className='countries-container'>

                {searchFilter.map((item, area) =>
                    <div key={area} onClick={() => navigate(`/${item.area}`)} className='single' >

                        <div>
                            <img src={item.flags.png} alt="product image" />
                        </div>
                        <div className='text-countries'>
                            <h3> {item.name.common}</h3>
                            <p className='bold'>Population: <span className='light'>{item.population}</span> </p>
                            <p className='bold'>Region: <span className='light'>{item.region}</span> </p>
                            {/* <p>Sub Region: <span>{item.subregion}</span></p> */}
                            <p className='bold'>Capital: <span className='light'>{item.capital}</span> </p>
                        </div>

                    </div>
                )
                }
            </div>
        </>
    )
};

export default Countries;