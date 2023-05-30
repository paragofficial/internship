import React ,{useState, useEffect} from 'react'

const Read = () => {
  const colors = ['#f19b44', '#fcc680', '#ebce94'];
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
     <div style={{backgroundColor}}>
      <div className='h-100 d-flex align-items-center justify-content-center' style={{paddingTop: "40px",paddingBottom: "40px" ,display: "flex", alignItems: "flex-start", height: "100vh", }}>
        <div className='h-100 d-flex align-items-center justify-content-start' style={{ margin: "0 10px 0 0" }}>
          <h1 style={{ color: "white",fontWeight: "900" }}>Aesop</h1>
        </div>
        <figure className="figure" >
          <img
            src="https://img.freepik.com/premium-photo/different-skin-care-cosmetic-products-set-green-leaves-white-background-top-view_114309-2381.jpg"
            className="figure-img img-fluid rounded"
            alt="A generic square placeholder with rounded corners in a figure."
            style={{height: "500px", width: "500px"}}
          />
        </figure>
        <div style={{ marginLeft: "10px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
          <ul>
          <li style={{ margin: "20px", padding: "20px" }}>
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" style={{color: "white", fontSize: 20}}>Our story</a>
            </li>
            <li style={{ margin: "20px", padding: "20px" }}>
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" style={{color: "white", fontSize: 20}}>Careers</a>
            </li>
            <li style={{ margin: "20px", padding: "20px" }}>
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" style={{color: "white", fontSize: 20}}>Foundation</a>
            </li>
            <li style={{ margin: "20px", padding: "20px" }}>
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" style={{color: "white", fontSize: 20}}>Contact Us</a>
            </li>
            
          </ul>
          <ul>
          <li style={{ margin: "20px", padding: "20px" }}>
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" style={{color: "white", fontSize: 20}}>Philosophy</a>
            </li>
            <li style={{ margin: "20px", padding: "20px" }}>
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" style={{color: "white", fontSize: 20}}>Products</a>
            </li>
            
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Read
