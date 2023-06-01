import React, { useEffect, useState } from 'react';

const Body = () => {
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
              src='https://plus.unsplash.com/premium_photo-1679448060884-d983f3365b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZCUyMGNhcmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
              className='figure-img img-fluid rounded'
              alt='A generic square placeholder with rounded corners in a figure.'
              style={{ maxHeight: '550px', width: 'auto'}}
            />
          </figure>
          <div style={{ margin: '10px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.amazon.in/s?k=hand+lotion&crid=223HRXBO433JE&sprefix=hand+lotion%2Caps%2C217&ref=nb_sb_noss_1'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Hand
                </a>
              </li>
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.amazon.in/s?k=bodylotion&crid=3CLRNHEQTH01&sprefix=bodylotion%2Caps%2C215&ref=nb_sb_noss_2'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Body
                </a>
              </li>
           
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.amazon.in/s?k=hand+mist&crid=2SNDA4V4NWZ6Z&sprefix=hand+mist%2Caps%2C219&ref=nb_sb_noss_1'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Hand mist
                </a>
              </li>
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.amazon.in/s?k=hand+balm&crid=1MET8Z1RCE25N&sprefix=hand+balm%2Caps%2C204&ref=nb_sb_noss_1'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Hand Balm
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
