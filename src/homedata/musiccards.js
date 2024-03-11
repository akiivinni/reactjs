import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MusicCards = () => {
  const [data, setData] = useState([]);
  const [isHovered, setIsHovered] = useState(false); // State to manage hover effect

  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/ridoansaleh/my-music-api/songs")
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const cardStyle = {
    width: "18",
    backgroundColor: isHovered ? "#d9d9d9" : "#f0f0f0", 
    margin: "15px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease", 
    transform: isHovered ? "scale(1.05)" : "scale(1)", 
  };

  return (
    <div className="row">
      {data.map(item => (
        <div className="col-md-4" key={item.id}>
          <div
            className="card"
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
          >
            <div className="card-body">
              <h5 className="card-title">{item.id}</h5>
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.genre}</p>
              <p className="card-text">{item.singer}</p>
              <a href="#" className="btn btn-primary">Listen Music</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicCards;
