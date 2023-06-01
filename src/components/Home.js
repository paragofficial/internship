import React from 'react';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: "#664400" }}>
        <div className='h-100 d-flex align-items-center justify-content-center' style={{ paddingTop: "40px", paddingBottom: "40px", display: "flex", alignItems: "flex-start", minHeight: "100vh" }}>
          <div style={{ marginLeft: "10px", color: "white" }}>
            <h1>Parsley Seed Anti-Oxidant Intense Serum</h1>
            <h5>Explore how this anti-oxidant-rich serum hydrates, replenishes and fortifies the skin via a suite of ingredients selected with urban dwellers in mind.</h5>
          </div>
          <figure className="figure">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/4SUhr7BGma03r1oHxGHgpY/736e8b4997372edbecf26d60044caabf/Aesop_PSAOIS_2023_Web_Homepage_Primary_50-50_Desktop_1440x1500px.jpg"
              className="figure-img img-fluid rounded"
              alt="A generic square placeholder with rounded corners in a figure."
              style={{ height: "auto", width: "100%", maxWidth: "600px" }}
            />
          </figure>
        </div>

        <div className='h-100 d-flex align-items-center justify-content-center' style={{ paddingTop: "40px", paddingBottom: "40px", display: "flex", alignItems: "flex-start", minHeight: "100vh" }}>
          <figure className="figure">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
              className="figure-img img-fluid rounded"
              alt="A generic square placeholder with rounded corners in a figure."
              style={{ height: "auto", width: "100%", maxWidth: "600px" }}
            />
          </figure>
          <div style={{ marginLeft: "10px", color: "white" }}>
            <h1>Fortification of the highest order</h1>
            <h5>Our Parsley Seed Skin Care range provides potent doses of anti-oxidant rich ingredients in formulations suited to all skin types. They are especially recommended for those in urban environments, to fortify the skin against the damaging effects of free radicals.</h5>
          </div>
        </div>

        <div className='h-100 d-flex align-items-center justify-content-center' style={{ paddingTop: "40px", paddingBottom: "40px", display: "flex", alignItems: "flex-start", minHeight: "100vh" }}>
          <div style={{ marginLeft: "10px", color: "white" }}>
            <h1>A guide to facial serums</h1>
            <h5>A comprehensive guide to Aesop's plentiful offering of facial serums. Learn about these skin care formulations designed for different skin types.</h5>
          </div>
          <figure className="figure">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/1s7e7J0Y8Piw8fEPVeV72e/34ee50838a19fd38c74107f9a0766264/Aesop_A_Guide_To_Facial_Serums_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg"
              className="figure-img img-fluid rounded"
              alt="A generic square placeholder with rounded corners in a figure."
              style={{ height: "auto", width: "100%", maxWidth: "600px" }}
            />
          </figure>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
