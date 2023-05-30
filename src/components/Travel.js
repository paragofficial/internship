import React,{useState, useEffect} from 'react'

const Travel = () => {
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
          <h1 style={{ color: "white",fontWeight: "900" }}>Aesop</h1> {/* Added margin: 0 */}
        </div>
        <figure className="figure" >
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/1p1s2CjhO0qsMzkz3BtKlM/765643980fd5d48b625e76596f4ee431/Aesop_Homepage_Navigation_Category_Travel_Desktop_1700x2400px.jpg"
            className="figure-img img-fluid rounded"
            alt="A generic square placeholder  with rounded corners in a figure."
            style={{height: "500px", width: "500px"}}
          />
        </figure>
        <div style={{ marginLeft: "10px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
          <ul>
          <li style={{ margin: "20px", padding: "20px" }}>
              <a href="https://www.amazon.in/s?k=skin+care+kits&crid=1983DPCE1TCA3&sprefix=skin+care+kits%2Caps%2C223&ref=nb_sb_noss_1" target="_blank" rel="noopener noreferrer" style={{color: "white", fontSize: 20}}>Skincare kits</a>
            </li>
            <li style={{ margin: "20px", padding: "20px" }}>
              <a href="https://www.amazon.in/s?k=gift+kits&crid=2W14HQS3L4S3G&sprefix=gift+kits%2Caps%2C202&ref=nb_sb_noss_1" target="_blank" rel="noopener noreferrer" style={{color: "white", fontSize: 20}}>Gift kits</a>
            </li>
            <li style={{ margin: "20px", padding: "20px" }}>
              <a href="https://www.amazon.in/s?k=body+care+kits&crid=3B4PVEFLSIYE4&sprefix=body+carekits%2Caps%2C196&ref=nb_sb_noss" target="_blank" rel="noopener noreferrer" style={{color: "white", fontSize: 20}}>Body care kits</a>
            </li>
            <li style={{ margin: "20px", padding: "20px" }}>
              <a href="https://www.amazon.in/s?k=hand+care+kits&crid=22U3FVB0D3S77&sprefix=handcare+kits%2Caps%2C205&ref=nb_sb_noss" target="_blank" rel="noopener noreferrer" style={{color: "white", fontSize: 20}}>Hand care kits</a>
            </li>
           
          </ul>
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default Travel
