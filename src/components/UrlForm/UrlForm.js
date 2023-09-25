import React, { useState } from 'react';
import { postUrl } from '../../apiCalls';

function UrlForm({ setUrls, urls }) {
  const [title, setTitle] = useState('');
  const [long_url, setLong_Url] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    
    const newUrl = {
      title,
      long_url,
    };

    postUrl(newUrl)
      .then(responseData => {
        setUrls([...urls, responseData])
        clearInputs();
      });
  };

  const clearInputs = () => {
    setTitle('');
    setLong_Url('');
  };

  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='title'
        value={long_url}
        onChange={e => setLong_Url(e.target.value)}
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  );
};

export default UrlForm;
