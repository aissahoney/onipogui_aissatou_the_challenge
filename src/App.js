import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter ,Outlet, Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './App.css';
import CountryInfo from './components/CountryInfo/CountryInfo';
import Countries from './components/Countries/Countries';
import ErrorPage from './components/Error/Error';




function App() {
  const [data, setData] = useState([])
  const [mode, setMode]=useState(true)
  
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then((reponse) => setData(reponse.data))
      .catch((error) => console.log(error));
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        
        {
          path: '/countries',
          element: <Countries data={data}/>

        }
        ,
        {
          path: '/:area',
          element: <CountryInfo data={data} />
        }
      ]}
  ])

 
  function Root() {
    return (
        <div className={`${mode ? null : "darkMode"}`}>

            <div className='header'>

                <h3><Link to='/countries'></Link>Where is The World </h3>
                <h3 onClick={()=>setMode(!mode)}>  Dark Mode</h3>
                
            </div>

            <div>
                <Outlet />
            </div>

        </div>


    )
}



  return (
    <div className={`${mode ? null : "darkMode"}`}>
  
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
