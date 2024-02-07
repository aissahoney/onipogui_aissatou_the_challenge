import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
// import { faSearch} from '@fortawesome/free-solid-svg-icons';
import './CountryInfo.css'

const CountryInfo = ({ data, mode }) => {
    //lien pour avancer vers une autre page
    const navigate = useNavigate()

    // method epour trouver l'item recherché dans le map selon son area
    const { area } = useParams()
    let product = data.find(item => item.area == area)

    return (
        <div className='desc-container'>
            <button id='back-button' onClick={() => navigate(`/countries`)} > Back </button>
            {/* <button onClick={() => navigate(`/countries`)} > <FontAwesomeIcon id='iconBack' icon={faArrowLeft}/>Back</button> */}
            <div className='description'>
                <div>
                    <img src={product?.flags.png} alt="product" />
                </div>
                <div className='description-text'>
                    <h1>{Object.values(product?.name.nativeName)[0].common}</h1>

                    <div>
                        <p className='bold'>Native Name:  <span className='light'>{product?.name.common}</span></p>
                        <p className='bold'>Population: <span className='light'>{product?.population}</span> </p>
                        <p className='bold'>Region:    <span className='light'>{product?.region}</span></p>
                        <p className='bold'>Sub Region: <span className='light'>{product?.subregion}</span></p>
                        <p className='bold'>Capital:   <span className='light'>{product?.capital}</span></p>
                    </div>
                    <div>
                        <p className='bold'>Top Level Domain: <span className='light'>{product?.tld}</span></p>
                        <p>Currencies: <span>{Object.values(product?.currencies)[0].name}</span></p>
                        {/* <p>Languages: <span>{Object.values(product?.languages)[0].name}</span></p> */}
                    </div>
                    <div className='borders-container'>
                        <p className='bold'>Border&nbsp;Countries:&nbsp;</p>
                        <div className='borders'>
                            {product?.borders?.map((item, index) =>
                            (<div key={index}>
                                <button onClick={() => navigate(`/${data.find(element => element?.cca3 === item).area}`)} >{data.find(element => element?.cca3 === item).name.common}</button>
                            </div>
                            )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryInfo;