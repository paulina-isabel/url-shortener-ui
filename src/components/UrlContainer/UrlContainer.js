import React from 'react';
import './UrlContainer.css';

const UrlContainer = ({ urls }) => {
  const urlEls = urls.map(url => {
    return (
      <div className="url" key={url.id}>
        <h2 className='title'>{url.title}</h2>
        <a href={url.short_url} target="blank" className='short-url'>{url.short_url}</a>
        <p className='long-url'>{url.long_url}</p>
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
