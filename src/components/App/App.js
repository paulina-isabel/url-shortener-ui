import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App () {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const apiCall = async() => {
      const data = await getUrls()
      console.log(data)
      setUrls(data.urls)
    }
    apiCall()
  }, [])

  return (
    <div className='App'>
    <h1>URL Shortener</h1>
      <UrlForm />
      <UrlContainer urls={urls}/>
    {/* <div className="App">
      jdfnkjds
      <header>
        <h1>URL Shortener</h1>
        <UrlForm />
      </header>

      <UrlContainer urls={"<<<Urls should go here>>>"}/>
    </div>
    <div>
      hi
    </div> */}
    </div>
  );
}

export default App;
