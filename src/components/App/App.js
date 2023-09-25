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
      setUrls(data.urls)
    }
    apiCall()
  }, []);

  return (
    <div className='App'>
    <h1>URL Shortener</h1>
      <UrlForm setUrls={setUrls} urls={urls}/>
      <UrlContainer urls={urls}/>
    </div>
  );
};

export default App;