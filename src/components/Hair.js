import React, { useEffect, useState } from 'react';

const Hair = () => {
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
              src='https://www.aesop.com/u1nb1km7t5q7/1fi7x3gxHOba7MFtIctntt/9e47c7b14c67f3ed28df74c416090251/Aesop_Homepage_Navigation_Category_Hair_Desktop_1700x2400px.jpg'
              className='figure-img img-fluid rounded'
              alt='A generic square placeholder with rounded corners in a figure.'
              style={{maxHeight: '550px', width: 'auto' }}
            />
          </figure>
          <div style={{ margin: '10px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.amazon.in/s?k=cleanse+hair&crid=210D15VHL02CS&sprefix=cleanse+hair%2Caps%2C215&ref=nb_sb_noss_2'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Cleanse
                </a>
              </li>
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.amazon.in/s?k=conditionhair&crid=3UQVLEAS7PTDF&sprefix=conditionhair%2Caps%2C208&ref=nb_sb_noss'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Condition
                </a>
              </li>
            
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.amazon.in/s?k=treat+hair&crid=1YQ7TFQXZOXIR&sprefix=treat+hair%2Caps%2C214&ref=nb_sb_noss_1'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Treat
                </a>
              </li>
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.amazon.in/s?k=groomhair&crid=4F9WW5QA92UT&sprefix=groomhair%2Caps%2C212&ref=nb_sb_noss'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Groom
                </a>
              </li>
              <li style={{ margin: '20px', padding: '20px' }}>
                <a
                  href='https://www.amazon.in/s?k=shampoo+hair&crid=3NWXH0OT0G77S&sprefix=shampoo+hair%2Caps%2C215&ref=nb_sb_noss_1'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Shampoo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hair;
