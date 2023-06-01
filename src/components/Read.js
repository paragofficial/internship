import React, { useState, useEffect } from 'react';

const Read = () => {
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
              src='https://img.freepik.com/premium-photo/different-skin-care-cosmetic-products-set-green-leaves-white-background-top-view_114309-2381.jpg'
              className='figure-img img-fluid rounded'
              alt='A generic square placeholder with rounded corners in a figure.'
              style={{maxHeight: '550px', width: 'auto' }}
            />
          </figure>
          <div style={{ margin: '10px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.example.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Our story
                </a>
              </li>
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.example.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Careers
                </a>
              </li>
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.example.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Foundation
                </a>
              </li>
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.example.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Contact Us
                </a>
              </li>
           
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.example.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Philosophy
                </a>
              </li>
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.example.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Products
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
