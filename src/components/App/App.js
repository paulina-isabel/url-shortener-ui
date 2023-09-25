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
      // console.log(data)
      setUrls(data.urls)
      // console.log(typeof urls, 'this is typeof urls in useEffect')
      // console.log(urls, 'this is urls in useEffect')
    }
    apiCall()
  }, [])

  const addUrl = (newUrl) => {
    setUrls([...urls, newUrl])
    console.log(urls, 'urls in addUrl function')
  }

  return (
    <div className='App'>
    <h1>URL Shortener</h1>
      <UrlForm addUrl={addUrl}/>
      <UrlContainer urls={urls}/>
    </div>
  );
}

export default App;
