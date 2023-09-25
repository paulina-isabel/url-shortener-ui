import React from 'react';
import './UrlContainer.css';

const UrlContainer = ({ urls }) => {
  // console.log(typeof urls, 'this is typeof urls in container')
  // console.log(urls, 'this is urls in container')

  console.log(urls, 'urls in UrlContainer')

  const urlEls = urls.map(url => {
    return (
      <div className="url" key={url.id}>
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
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
