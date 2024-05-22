import React, {useState, useEffect} from 'react'
import "./Menu.css"

function Menu() {
    const [allImage, setAllImage] = useState([]);
    useEffect(() => {
    
        getDish();
      }, []);
    const getDish = async () => {
        try {
          const response = await fetch("http://localhost:1337/get-menu");
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setAllImage(data.data);
        } catch (error) {
          console.error("Error fetching image data:", error);
        }
      };
  return (
    <div className='menu-main'>
      <h3 className='menu-Title'>Menu</h3>
       <div className="image-container">
        {allImage.map((data, index) => {
          const imageUrl = `data:image/jpeg;base64,${data.image}`;
          return (
            <div key={index} className="image-item">
              <img src={imageUrl} alt={`Image ${index}`} />
              <div className="image-text">{data.Name}</div>
              <div className="image-text">₱&nbsp;{data.Price}</div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Menu
