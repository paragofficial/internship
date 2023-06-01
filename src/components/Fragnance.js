import React, { useEffect, useState } from 'react';

const Fragnance = () => {
  const colors = ['#332200', '#664500', '#996700'];
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColorIndex = Math.floor(Math.random() * colors.length);
      setBackgroundColor(colors[randomColorIndex]);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div>
      <div style={{ backgroundColor }}>
        <div
          className='container'
          style={{
            paddingTop: '40px',
            paddingBottom: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <div style={{ margin: '0 10px 20px 0' }}>
            <h1 style={{ color: 'white', fontWeight: '900', margin: 0 }}>Aesop</h1>
          </div>
          <figure className='figure'>
            <img
              src='https://www.aesop.com/u1nb1km7t5q7/6hAuVvwJ8jj5GYOVhsCAqB/82bcf2e821b13258afad2c64406f8e29/Aesop_Homepage_Navigation_Category_Fragrance_Desktop_1700x2400px.jpg'
              className='figure-img img-fluid rounded'
              alt='A generic square placeholder with rounded corners in a figure.'
              style={{ maxHeight: '550px', width: 'auto' }}
            />
          </figure>
          <div style={{ margin: '10px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.amazon.in/s?k=gloom+fragnance&crid=4FL92PUMUWOZ&sprefix=gloom+fragnance%2Caps%2C208&ref=nb_sb_noss'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Gloom
                </a>
              </li>
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.amazon.in/s?k=floralfragnance&crid=1QHT9NGVHVKMU&sprefix=floralfragnance%2Caps%2C206&ref=nb_sb_noss'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Floral
                </a>
              </li>
            
            
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.amazon.in/s?k=fresh+fragnance&crid=354SYWO3GIP6H&sprefix=fresh+fragnance%2Caps%2C202&ref=nb_sb_noss_2'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Fresh
                </a>
              </li>
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.amazon.in/s?k=woodyfragnance&crid=2IA149GC9ZG26&sprefix=woodyfragnance%2Caps%2C188&ref=nb_sb_noss'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Woody
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fragnance;
