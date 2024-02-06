import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
// import { faSearch} from '@fortawesome/free-solid-svg-icons';
import './CountryInfo.css'

const CountryInfo = ({ data }) => {
    //lien pour avancer vers une autre page
    const navigate = useNavigate()
    // method epour trouver l'item recherché dans le map selon son area
    const { area } = useParams()
    let product = data.find(item => item.area == area)

    // function FindBorder(element) {
    //     data.map((item)
    //         => {
    //             if (item.cca3 == element) {
    //                 return item.name.common
    //             }
    //         })

    // }

    return (
        <div className='desc-container'>
            <button onClick={() => navigate(`/countries`)}> Back </button>
            {/* <button onClick={() => navigate(`/countries`)} > <FontAwesomeIcon id='iconBack' icon={faArrowLeft}/>Back</button> */}
            <div className='description'>
                <div>
                    <img src={product?.flags.png} alt="product" />
                </div>
                <div>

                    <div>
                        <p>Native Name:  <span>{product?.name.common}</span></p>
                        <p>Population: <span>{product?.population}</span> </p>
                        <p>Region:    <span>{product?.region}</span></p>
                        <p>Sub Region: <span>{product?.subregion}</span></p>
                        <p>Capital:   <span>{product?.capital}</span></p>
                    </div>
                    <div>
                        <p>Top Level Domain: <span>{product?.tld}</span></p>
                        {/* <p>Currencies: <span>{product?.currencies}</span></p> */}
                        {/* <p>Languages: <span>{product?.languages}</span></p> */}
                    </div>

                    {/* {data.map((item)=>
                    element=== item.cca3?<button> {item.name.common}<button />)} */}
                    {/* <p>Border Countries: </p> <button>{(product?.borders) ? Object.values(product?.borders) 
                            .toString() 
                            .split(',') 
                            .join (' '): "NAN"} </button> */}
                    <p>Border Countries: </p>{product?.borders?.map((element,index) =>
                        ( <button key={index}>{element != '' ? element : 'NAN'}</button>)
                    )}
                    {/* (product?.borders) ? Object.values(product?.borders) 
                            .toString() 
                            .split(',') 
                            .join (' '): "NAN" */}
                </div>
            </div>
        </div>
    );
};

export default CountryInfo;