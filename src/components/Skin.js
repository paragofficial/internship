import React, { useState, useEffect } from 'react';

const Skin = () => {
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
          className='h-100 d-flex align-items-center justify-content-center'
          style={{
            paddingTop: '40px',
            paddingBottom: '40px',
            display: 'flex',
            alignItems: 'flex-start',
            minHeight: '100vh',
            flexDirection: 'column',
          }}
        >
          <div style={{ margin: '0 10px 20px 0' }}>
            <h1 style={{ color: 'white', fontWeight: '900', margin: 0 }}>Aesop</h1>
          </div>
          <figure className='figure'>
            <img
              src='https://5.imimg.com/data5/RQ/VH/GLADMIN-10967868/skin-care-500x500.jpg'
              className='figure-img img-fluid rounded'
              alt='A generic square placeholder with rounded corners in a figure.'
              style={{ maxHeight: '550px', width: 'auto' }}
            />
          </figure>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '10px',
              width: '100%',
              maxWidth: '500px',
              margin: '20px 0',
            }}
          >
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
              <li style={{ margin: '10px', padding: '10px' }}>
                <a
                  href='https://www.amazon.in/s?k=skin+cleanse&crid=3IOUCUO7P86EN&sprefix=skin+cleanse%2Caps%2C239&ref=nb_sb_noss_2'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Cleanse
                </a>
              </li>
              <li style={{ margin: '10px', padding: '10px' }}>
                <a
                  href='https://www.amazon.in/s?k=skin+tone&crid=1ACF60VMCYLO8&sprefix=skin+tone%2Caps%2C217&ref=nb_sb_noss_1'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Tone
                </a>
              </li>
              <li style={{ margin: '10px', padding: '10px' }}>
                <a
                  href='https://www.amazon.in/s?k=skin+hydrate&crid=2AV1UT0EMQHX&sprefix=skin+hydrate%2Caps%2C215&ref=nb_sb_noss_2'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Hydrate
                </a>
              </li>
              <li style={{ margin: '10px', padding: '10px' }}>
                <a
                  href='https://www.amazon.in/s?k=eyes+and+lips&crid=15IN8R1HQ02MM&sprefix=eyes+and+lips%2Caps%2C214&ref=nb_sb_noss_2'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Eyes and Lips
                </a>
              </li>
              <li style={{ margin: '10px', padding: '10px' }}>
                <a
                  href='https://www.amazon.in/s?k=skin+shave&crid=1GF93YCK3Y72V&sprefix=skin+shave%2Caps%2C216&ref=nb_sb_noss_1'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Shave
                </a>
              </li>
            </ul>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
              <li style={{ margin: '10px', padding: '10px' }}>
                <a
                  href='https://www.amazon.in/s?k=skin+dry&crid=18MXL25FVTDM0&sprefix=skin+dry%2Caps%2C208&ref=nb_sb_noss_1'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Dry
                </a>
              </li>
              <li style={{ margin: '10px', padding: '10px' }}>
                <a
                  href='https://www.amazon.in/s?k=skin+oily&crid=3ITH2BML8EJNT&sprefix=skin+oily%2Caps%2C222&ref=nb_sb_noss_2'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Oily
                </a>
              </li>
              <li style={{ margin: '10px', padding: '10px' }}>
                <a
                  href='https://www.amazon.in/s?k=skin+sensitive&crid=3A0FKTAEGBK1F&sprefix=skin+sensitive%2Caps%2C216&ref=nb_sb_noss_2'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}
                >
                  Sensitive
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skin;
