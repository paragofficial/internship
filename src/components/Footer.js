import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div className="container my-5">
        <footer className="text-center text-lg-start" style={{ backgroundColor: "#595959" }}>
          <div className='h-100 d-flex align-items-center justify-content-center'>
            <ul>
              <li style={{ margin: "20px", padding: "20px" }}>
                <a href="https://www.example.com" target="_blank" rel="noreferrer" style={{ color: "white" }}>Instagram</a>
              </li>
              <li style={{ margin: "20px", padding: "20px" }}>
                <a href="https://www.example.com" target="_blank" rel="noreferrer" style={{ color: "white" }}>Email</a>
              </li>
            </ul>
          </div>
          {/* Copyright */}
          <div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className="text-white" href="https://www.google.com" target="_blank" rel="noreferrer"> aesop.com</a>
          </div>
          {/* Copyright */}
        </footer>
      </div>
      {/* End of .container */}
    </>
  );
};

export default Footer;
