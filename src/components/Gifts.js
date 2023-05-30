import React ,{useState, useEffect} from 'react'

const Gifts = () => {
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
            src="https://www.aesop.com/u1nb1km7t5q7/62ttkdTsftqoYNvP5mYtBA/66da35d44f176bd963d1e6d0d0b62a99/Aesop_Homepage_Navigation_Category_Gifts_Desktop_1700x2400px.jpg"
            className="figure-img img-fluid rounded"
            alt="A generic square placeholder with rounded corners in a figure."
            style={{height: "500px", width: "500px"}}
          />
        </figure>
        <div style={{ marginLeft: "10px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
          <ul>
          <li style={{ margin: "20px", padding: "20px" }}>
              <a href="https://www.amazon.in/s?k=seasonal+gift+kits&crid=64YOB5YAOK2P&sprefix=seasonal+gift+kits%2Caps%2C238&ref=nb_sb_noss" target="_blank" rel="noopener noreferrer" style={{color: "white", fontSize: 20}}>Seasonal Gifts kits</a>
            </li>
            <li style={{ margin: "20px", padding: "20px" }}>
              <a href="https://www.amazon.in/s?k=small+gesture&crid=1DW3KGQ983NGR&sprefix=small+gesture%2Caps%2C201&ref=nb_sb_noss_2" target="_blank" rel="noopener noreferrer" style={{color: "white", fontSize: 20}}>Small gesture</a>
            </li>
            <li style={{ margin: "20px", padding: "20px" }}>
              <a href="https://www.amazon.in/s?k=gift+for+self+care&crid=136OKEVGLXEX5&sprefix=gift+for+self+care%2Caps%2C216&ref=nb_sb_noss_2" target="_blank" rel="noopener noreferrer" style={{color: "white", fontSize: 20}}>Gift for self care</a>
            </li>
            <li style={{ margin: "20px", padding: "20px" }}>
              <a href="https://www.amazon.in/s?k=gift+for+travels&crid=2SVMHL1ESAS0&sprefix=gift+for+travel%2Caps%2C205&ref=nb_sb_noss_1" target="_blank" rel="noopener noreferrer" style={{color: "white", fontSize: 20}}>Gifts for travel</a>
            </li>
            <li style={{ margin: "20px", padding: "20px" }}>
              <a href="https://www.amazon.in/s?k=gift+bundles&crid=22CQH4KCSSZKG&sprefix=gift+bundle%2Caps%2C209&ref=nb_sb_noss_1" target="_blank" rel="noopener noreferrer" style={{color: "white", fontSize: 20}}>Gift Bundles</a>
            </li>
            
          </ul>
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default Gifts
