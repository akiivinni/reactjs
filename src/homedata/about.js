import React from 'react';
import { useNavigate } from 'react-router-dom';
const Aboutus= () => {
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%', 
    margin: '20px', 
  },
  imageContainer: {
    flex: 1,
    padding: '20px', 
  },
  textContainer: {
    flex: 1,
    padding: '20px', 
    
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block', 
  },
  textAlignCenter: {
    textAlign: "center",
    fontWeight: "bold"
   
  },
  textAlignJustify: {
    textAlign: "justify"
  },
  fontWeightBold: {
    fontWeight: "bold"
  },
  button: {
    padding: '30px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '20px'
  },
  buttonNavigate: {
    padding: '10px 20px',
    backgroundColor: '#28a745', 
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '5px'
  }
};


const navigate = useNavigate(); 
  const navigatetohome = () => {
    navigate("/");
  }



  return (
    <>
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src="images.jpg" alt="Your Image" style={styles.image} width={500}/>
     
      </div>
      <div style={styles.textContainer}>
        <p style = {styles.textAlignCenter}>
        Music is an art that, in one guise or another, permeates every human society. Modern music is heard in a bewildering profusion of styles, many of them contemporary, others engendered in past eras. Music is a protean art; it lends itself easily to alliances with words, as in song, and with physical movement, as in dance. 
        </p>

      </div>
    </div>
    <div style={styles.container}>
    <div style={styles.imageContainer}>
      <img src="images.jpg" alt="Your Image" style={styles.image} width={500}/>

      <button style={styles.buttonNavigate} onClick={ navigatetohome}>Click to see more albums</button>

    </div>
    <div style={styles.textContainer}>
    <p style={styles.textAlignCenter}>
      Music is an art that, in one guise or another, permeates every human society. Modern music is heard in a bewildering profusion of styles, many of them contemporary, others engendered in past eras. Music is a protean art; it lends itself easily to alliances with words, as in song, and with physical movement, as in dance. 
      </p>
      {/* <button style={styles.buttonNavigate} onClick={ navigatetohome}>Click to see more albums</button> */}

    </div>
  </div>
  </>

  );
};

export default Aboutus;
