import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CountryInfo.css';

const CountryInfo = ({ data }) => {
    const navigate = useNavigate();
    const { area } = useParams();
    const product = data.find(item => item.alpha2Code === area);

    // S'assurer que product existe avant d'afficher les données
    if (!product) {
        return <div>Country not found</div>;
    }

    return (
        <div className="desc-container">
            <button id="back-button" onClick={() => navigate(`/`)}>Back</button>
            <div className="description">
                <div>
                    <img src={product.flags.png} alt={`${product.name} flag`} />
                </div>
                <div className="description-text">
                    <h1>{product.name}</h1>
                    <div>
                        <p className="bold">Native Name: <span className="light">{product.nativeName}</span></p>
                        <p className="bold">Population: <span className="light">{product.population}</span></p>
                        <p className="bold">Region: <span className="light">{product.region}</span></p>
                        <p className="bold">Sub Region: <span className="light">{product.subregion}</span></p>
                        <p className="bold">Capital: <span className="light">{product.capital}</span></p>
                    </div>
                    <div>
                        <p className="bold">Top Level Domain: <span className="light">{product.topLevelDomain[0]}</span></p>
                        <p>Currencies: 
                            <span>
                                {product.currencies && product.currencies.length > 0 
                                    ? product.currencies.map((currency, index) => (
                                        <span key={index}>
                                            {currency.name} ({currency.symbol})
                                        </span>
                                      ))
                                    : 'N/A'}
                            </span>
                        </p>
                        <p>Languages: 
                            <span>
                                {product.languages && product.languages.length > 0
                                    ? product.languages.map((language, index) => (
                                        <span key={index}>{language.name} </span>
                                      ))
                                    : 'N/A'}
                            </span>
                        </p>
                    </div>
                    <div className="borders-container">
                        <p className="bold">Border Countries: </p>
                        <div className="borders">
                            {product.borders && product.borders.length > 0 
                                ? product.borders.map((border, index) => (
                                    <div key={index}>
                                        <button onClick={() => navigate(`/${border}`)}>
                                            {data.find(item => item.alpha3Code === border)?.name}
                                        </button>
                                    </div>
                                  ))
                                : 'No borders'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryInfo;
