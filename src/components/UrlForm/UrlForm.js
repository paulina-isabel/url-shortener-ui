import React, { useState } from 'react';

function UrlForm({ addUrl }) {
  const [title, setTitle] = useState('');
  const [long_url, setLong_Url] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    let shortUrl;
    
    const newUrl = {
      id: Date.now(),
      title,
      long_url,
      short_url: `http://localhost:3001/useshorturl/${Date.now()}`
    }
    // console.log(newUrl, 'this is the new url variable you just made')
    addUrl(newUrl)
    clearInputs();
  }

  const clearInputs = () => {
    setTitle('');
    setLong_Url('');
  }

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
  )
}

export default UrlForm;
